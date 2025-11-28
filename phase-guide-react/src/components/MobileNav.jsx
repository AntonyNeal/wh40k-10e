import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home", glyph: "Ⅰ", hint: "Anchor" },
  { to: "/initiation", label: "Initiation", glyph: "Ϟ", hint: "Vow" },
  { to: "/labyrinth", label: "Labyrinth", glyph: "∞", hint: "Maze" },
  { to: "/phases", label: "Phases", glyph: "Δ", hint: "Flow" },
  { to: "/roster", label: "Roster", glyph: "☉", hint: "Chorus" },
  { to: "/checklist", label: "Checklist", glyph: "✶", hint: "Ritual" },
];

const MobileNav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [forceExpanded, setForceExpanded] = useState(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return false;
    }
    return window.matchMedia("(min-width: 640px)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }

    const query = window.matchMedia("(min-width: 640px)");
    const handleChange = (event) => setForceExpanded(event.matches);

    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", handleChange);
    } else {
      query.addListener(handleChange);
    }

    return () => {
      if (typeof query.removeEventListener === "function") {
        query.removeEventListener("change", handleChange);
      } else {
        query.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!forceExpanded) {
      setIsOpen(false);
    }
  }, [location.pathname, forceExpanded]);

  const activeLink = useMemo(() => {
    const current = links.find((link) =>
      link.to === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(link.to)
    );
    return current ?? links[0];
  }, [location.pathname]);

  const shouldShowPanel = isOpen || forceExpanded;

  return (
    <nav
      className={`mobile-nav ${shouldShowPanel ? "mobile-nav--open" : ""}`.trim()}
      aria-label="Primary"
    >
      <button
        type="button"
        className="mobile-nav__toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={shouldShowPanel}
        aria-controls="nav-panel"
        aria-label={
          shouldShowPanel
            ? "Conceal navigation"
            : `Summon navigation (${activeLink.label})`
        }
        hidden={forceExpanded}
      >
        <span aria-hidden="true">{activeLink.glyph}</span>
      </button>
      <div
        id="nav-panel"
        className="mobile-nav__panel"
        aria-hidden={!shouldShowPanel}
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav__link mobile-nav__link--active"
                : "mobile-nav__link"
            }
            aria-label={`${link.label} – ${link.hint}`}
            title={`${link.label} · ${link.hint}`}
            tabIndex={shouldShowPanel ? undefined : -1}
          >
            <span className="mobile-nav__glyph" aria-hidden="true">
              {link.glyph}
            </span>
            <span className="mobile-nav__label" aria-hidden="true">
              {link.label}
            </span>
            <span className="mobile-nav__hint" aria-hidden="true">
              {link.hint}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
