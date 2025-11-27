# BSData wh40k-10e Copilot Instructions

This repository contains BattleScribe data files for Warhammer 40,000 10th Edition.

## Architecture Overview

### File Structure
- **`Warhammer 40,000.gst`** - Core game system file defining shared rules, profile types, categories, and cost types used across all factions
- **`*.cat`** - Catalogue files for individual factions (e.g., `Tyranids.cat`, `Imperium - Space Marines.cat`)
- **`*Library.cat`** - Shared library catalogues (e.g., `Aeldari - Aeldari Library.cat`) containing common elements used by multiple faction files

### XML Schema
Files follow the BattleScribe schema (`battlescribe.net/schema/catalogueSchema` and `gameSystemSchema`). Key elements:

```xml
<selectionEntry>     <!-- Units, models, wargear -->
<entryLink>          <!-- References to shared entries -->
<profile>            <!-- Unit stats, weapon profiles, abilities -->
<categoryEntry>      <!-- Keywords like Infantry, Character, Faction tags -->
<constraint>         <!-- Army building rules (min/max selections) -->
<modifier>           <!-- Conditional rules that change values -->
<sharedSelectionEntries>  <!-- Reusable unit/wargear definitions -->
<sharedRules>        <!-- Faction-wide special rules -->
<sharedProfiles>     <!-- Reusable stat profiles -->
```

### Profile Types (from .gst)
- **Unit**: M (Movement), T (Toughness), SV (Save), W (Wounds), LD (Leadership), OC (Objective Control)
- **Ranged Weapons**: Range, A (Attacks), BS (Ballistic Skill), S (Strength), AP, D (Damage), Keywords
- **Melee Weapons**: Range (Melee), A, WS (Weapon Skill), S, AP, D, Keywords
- **Abilities**: Description text

### Cost Types
- `pts` - Points cost (primary army building cost)
- `Crusade Points`, `Crusade: Experience`, `Crusade: Battle Honours` - Crusade campaign tracking

## Key Patterns

### ID References
All IDs are short hex strings (e.g., `sys-352e-adc2-7639-d6a9`). When adding new entries:
- Generate unique IDs in the same format
- Use `targetId` in `<entryLink>` to reference shared entries
- Use `childId` in conditions to check for selections/categories

### Faction Categories
Faction tags follow pattern `Faction: <Name>` (e.g., `Faction: Tyranids`, `Faction: Adeptus Astartes`)

### Legends Units
Legacy/Forge World units marked with `[Legends]` suffix in names

### Common Modifiers
```xml
<!-- Hide entry when condition met -->
<modifier type="set" value="true" field="hidden">
  <conditions>...</conditions>
</modifier>

<!-- Set point cost limit based on game size -->
<modifier type="set" value="500" field="constraint-id">
  <conditionGroups>...</conditionGroups>
</modifier>
```

## Development Guidelines

### Line Endings
Files **must** use LF line endings (enforced via `.gitattributes`)

### Code Owners
See `.github/CODEOWNERS` for faction-specific maintainers:
- Tyranids, Orks, T'au: @Dunamis55
- Space Marines, Imperium: @acebaur
- Chaos factions: @Mad-Spy
- Aeldari: @FarseerVeraenthis

### CI/CD
- `ci.yml` - Validates datafiles using `BSData/check-datafiles`
- `publish-catpkg.yml` - Publishes releases

### When Editing
1. Match existing formatting and indentation (2-space XML indent)
2. Preserve ID references - changing IDs breaks army lists
3. Test with BattleScribe app or online validators
4. Check that constraints and modifiers work correctly for army building limits

## Testing & Validation

### Local Testing
1. Open changed `.cat`/`.gst` files in [BattleScribe](https://battlescribe.net/) desktop app
2. Create a test roster with affected units to verify constraints work
3. Check unit profiles display correctly and point costs calculate properly

### CI Validation
The repository uses `BSData/check-datafiles` GitHub Action which validates:
- XML schema compliance
- ID uniqueness and reference integrity
- Broken links between entries

### Before Submitting PRs
- Ensure all modified files pass local BattleScribe loading
- Test edge cases for constraints (min/max unit counts, wargear limits)
- Verify conditional modifiers trigger correctly

## Common Conditional Patterns

### Hiding in Crusade Mode
```xml
<modifier type="set" value="true" field="hidden">
  <conditions>
    <condition type="atLeast" value="1" field="forces" scope="roster" 
               childId="cac3-71d1-ea4b-795d" includeChildForces="true"/>
  </conditions>
</modifier>
```

### Point Limits by Game Size
```xml
<modifier type="set" value="500" field="constraint-id">
  <conditionGroups>
    <conditionGroup type="and">
      <conditions>
        <condition type="greaterThan" value="0" field="selections" scope="force" 
                   childId="d62d-db22-4893-4bc0" includeChildSelections="true"/> <!-- 1000pt game -->
      </conditions>
    </conditionGroup>
  </conditionGroups>
</modifier>
```

### Hiding When Epic Hero Already Selected
```xml
<modifier type="set" value="true" field="hidden">
  <conditions>
    <condition type="atLeast" value="1" field="selections" scope="roster" 
               childId="target-unit-id" includeChildForces="true"/>
  </conditions>
</modifier>
```

## Allied Units & Detachment Rules

### Allied Unit Limits
Allied factions have point limits based on game size, defined in `.gst` faction category entries:
- 500pts at Combat Patrol (1000pt game)
- 1000pts at Incursion (2000pt game)  
- 1500pts at Strike Force (3000pt game)

### Cross-Faction References
- Use `scope="roster"` to check across entire army
- Use `scope="force"` to check within current detachment
- Allied catalogues link via `gameSystemId` to the core `.gst`

### Soup Armies
When factions can ally (e.g., Imperial Knights with other Imperium):
- Constraints use `notInstanceOf` to check primary catalogue
- Allied units often have separate category entries for tracking limits

## Version Management

### Revision Attribute
Each file has a `revision="X"` attribute in the root element:
- Increment when making any content changes
- BattleScribe uses this to detect updates
- Do NOT reset or skip numbers

### Game System Revision
Catalogues reference the game system via `gameSystemRevision`:
- Update when catalogue depends on new `.gst` features
- Mismatched versions may cause loading errors

## Common Tasks

### Adding a New Unit
1. Create `<selectionEntry>` with unique ID under faction catalogue
2. Add unit profile, weapon profiles, and ability profiles
3. Link required `<categoryLinks>` for keywords
4. Add `<constraints>` for roster limits if needed
5. Add `<entryLink>` in catalogue's `<entryLinks>` section to expose unit

### Adding Wargear Options
1. Create `<selectionEntryGroup>` within unit entry
2. Add `<selectionEntry>` for each option with weapon profiles
3. Use `<constraints>` for min/max selections
4. Use `defaultSelectionEntryId` for default loadout

### Updating Point Costs
Modify `<cost name="pts" typeId="51b2-306e-1021-d207" value="X"/>` in selection entries
