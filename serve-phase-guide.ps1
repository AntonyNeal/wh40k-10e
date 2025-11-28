param(
    [int]$Port = 8080,
    [string]$Root = (Join-Path (Join-Path $PSScriptRoot "phase-guide-react") "dist")
)

if (-not (Test-Path $Root)) {
    Write-Error "Content directory not found: $Root. Build the React app first (npm install && npm run build in phase-guide-react)."
    exit 1
}

Add-Type -AssemblyName System.Web
$rootFullPath = [System.IO.Path]::GetFullPath($Root)
$listener = [System.Net.HttpListener]::new()
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "Serving $Root at $prefix (Ctrl+C to stop)"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $relativePath = [System.Web.HttpUtility]::UrlDecode($request.Url.AbsolutePath.TrimStart('/'))
        if ([string]::IsNullOrWhiteSpace($relativePath)) {
            $relativePath = "index.html"
        }

        $safePath = [System.IO.Path]::GetFullPath((Join-Path $Root $relativePath))
        if (-not ($safePath.StartsWith($rootFullPath))) {
            $response.StatusCode = 403
        }
        elseif (Test-Path $safePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($safePath)
            $response.ContentType = Get-ContentType -FilePath $safePath
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
        else {
            $response.StatusCode = 404
        }

        $response.Close()
    }
}
finally {
    $listener.Stop()
}

function Get-ContentType {
    param([string]$FilePath)

    switch ([System.IO.Path]::GetExtension($FilePath).ToLower()) {
        ".html" { return "text/html" }
        ".css" { return "text/css" }
        ".js" { return "application/javascript" }
        ".json" { return "application/json" }
        ".png" { return "image/png" }
        ".jpg" { return "image/jpeg" }
        ".jpeg" { return "image/jpeg" }
        default { return "application/octet-stream" }
    }
}
