param(
    [string]$Source = "$HOME\Downloads\single-blog.md"
)

$ErrorActionPreference = "Stop"

$ProjectPath = "D:\Projects\RFQ-Website\RFQ-AutoPilot"
$BlogFolder = Join-Path $ProjectPath "src\content\blog"

if (-not (Test-Path -LiteralPath $Source)) {
    throw "Article source not found: $Source"
}

New-Item -ItemType Directory -Path $BlogFolder -Force | Out-Null

$Source = [System.IO.Path]::GetFullPath($Source)

$content = [System.IO.File]::ReadAllText($Source)
$content = $content.TrimStart([char]0xFEFF).Trim()

$frontmatter = ""
$body = $content

$frontmatterMatch = [regex]::Match(
    $content,
    '(?s)\A\s*---\s*\r?\n(?<frontmatter>.*?)\r?\n---\s*(?:\r?\n|$)(?<body>.*)\z'
)

if ($frontmatterMatch.Success) {
    $frontmatter = $frontmatterMatch.Groups["frontmatter"].Value
    $body = $frontmatterMatch.Groups["body"].Value.Trim()
}

function Get-Field {
    param(
        [string]$Name,
        [string]$DefaultValue = ""
    )

    if ([string]::IsNullOrWhiteSpace($frontmatter)) {
        return $DefaultValue
    }

    $pattern = '(?m)^\s*' +
        [regex]::Escape($Name) +
        ':\s*(?<value>.*?)\s*$'

    $match = [regex]::Match($frontmatter, $pattern)

    if (-not $match.Success) {
        return $DefaultValue
    }

    $value = $match.Groups["value"].Value.Trim()

    if (
        ($value.StartsWith('"') -and $value.EndsWith('"')) -or
        ($value.StartsWith("'") -and $value.EndsWith("'"))
    ) {
        $value = $value.Substring(1, $value.Length - 2)
    }

    return $value.Trim()
}

function Escape-Yaml {
    param([string]$Value)

    return $Value.Replace('"', '\"')
}

$title = Get-Field "title"
$description = Get-Field "description"
$slug = Get-Field "slug"
$pubDate = Get-Field "pubDate"
$readingTime = Get-Field "readingTime"
$author = Get-Field "author" "Walid Hasan"
$category = Get-Field "category" "RFQ Automation"
$featured = Get-Field "featured" "false"

# Get title from first H1 when frontmatter title is missing
if ([string]::IsNullOrWhiteSpace($title)) {
    $titleMatch = [regex]::Match(
        $body,
        '(?m)^\s*#\s+(?<title>.+?)\s*$'
    )

    if ($titleMatch.Success) {
        $title = $titleMatch.Groups["title"].Value.Trim()
    }
}

if ([string]::IsNullOrWhiteSpace($title)) {
    throw "Missing article title."
}

# Remove duplicate H1 from article content
$body = [regex]::Replace(
    $body,
    '(?m)^\s*#\s+.+?\r?\n+',
    '',
    1
).Trim()

# Generate slug
if ([string]::IsNullOrWhiteSpace($slug)) {
    $slug = $title.ToLowerInvariant()
    $slug = $slug -replace '&', ' and '
    $slug = $slug -replace '[^a-z0-9]+', '-'
    $slug = $slug.Trim('-')
}

if ([string]::IsNullOrWhiteSpace($slug)) {
    throw "Could not generate the article slug."
}

# Generate description
if ([string]::IsNullOrWhiteSpace($description)) {
    $paragraphs = [regex]::Split(
        $body,
        '\r?\n\s*\r?\n'
    )

    foreach ($paragraph in $paragraphs) {
        $clean = $paragraph `
            -replace '\[([^\]]+)\]\([^)]+\)', '$1' `
            -replace '[#*`>_~]', '' `
            -replace '\s+', ' '

        $clean = $clean.Trim()

        if (
            $clean.Length -ge 40 -and
            -not $clean.StartsWith("-") -and
            -not $clean.StartsWith("|")
        ) {
            $description = $clean
            break
        }
    }

    if ([string]::IsNullOrWhiteSpace($description)) {
        $description = $title
    }

    if ($description.Length -gt 157) {
        $description =
            $description.Substring(0, 157).TrimEnd() +
            "..."
    }
}

if ([string]::IsNullOrWhiteSpace($pubDate)) {
    $pubDate = Get-Date -Format "yyyy-MM-dd"
}

# Calculate reading time
if ([string]::IsNullOrWhiteSpace($readingTime)) {
    $plainText = $body `
        -replace '\[([^\]]+)\]\([^)]+\)', '$1' `
        -replace '[#*`>_~|-]', ' '

    $wordCount = (
        $plainText -split '\s+' |
        Where-Object {
            -not [string]::IsNullOrWhiteSpace($_)
        }
    ).Count

    $minutes = [Math]::Max(
        1,
        [Math]::Ceiling($wordCount / 200)
    )

    $readingTime = "$minutes min read"
}

$featured = $featured.ToLowerInvariant()

if ($featured -notin @("true", "false")) {
    $featured = "false"
}

# Remove SEO keyword notes from article bottom
$body = [regex]::Replace(
    $body,
    '(?ims)^\s*(Focus keyword|Long-tail keywords|Additional related keywords|Related SEO keywords):.*\z',
    ''
).Trim()

# Remove any previous automatically generated resource block
$body = [regex]::Replace(
    $body,
    '(?s)\s*<!-- AUTO BLOG LINKS START -->.*?<!-- AUTO BLOG LINKS END -->\s*',
    "`r`n"
).Trim()

function Add-LinkOnce {
    param(
        [string]$Text,
        [string[]]$Patterns,
        [string]$Url,
        [ref]$Added
    )

    $Added.Value = $false

    if (
        $Text.IndexOf(
            $Url,
            [StringComparison]::OrdinalIgnoreCase
        ) -ge 0
    ) {
        return $Text
    }

    $lines = [regex]::Split($Text, '\r?\n')
    $insideCodeBlock = $false

    for (
        $lineIndex = 0;
        $lineIndex -lt $lines.Count;
        $lineIndex++
    ) {
        $line = $lines[$lineIndex]

        if ($line -match '^\s*(```|~~~)') {
            $insideCodeBlock = -not $insideCodeBlock
            continue
        }

        if ($insideCodeBlock) {
            continue
        }

        # Skip headings, tables, HTML, code and lines with links
        if (
            $line -match '^\s*#{1,6}\s' -or
            $line -match '^\s*\|' -or
            $line -match '^\s*<' -or
            $line -match '\]\(' -or
            $line -match '`'
        ) {
            continue
        }

        foreach ($pattern in $Patterns) {
            $match = [regex]::Match(
                $line,
                $pattern,
                [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
            )

            if ($match.Success) {
                $anchor = $match.Value
                $linkedAnchor = "[$anchor]($Url)"

                $lines[$lineIndex] =
                    $line.Substring(0, $match.Index) +
                    $linkedAnchor +
                    $line.Substring(
                        $match.Index + $match.Length
                    )

                $Added.Value = $true

                return ($lines -join "`r`n")
            }
        }
    }

    return $Text
}

$internalLinks = @(
    @{
        Label = "RFQ automation software"
        Url = "https://rfqautopilot.com/rfq-automation-software/"
        Patterns = @(
            '\bRFQ automation software\b',
            '\bRFQ automation platform\b',
            '\bRFQ automation\b'
        )
    },
    @{
        Label = "RFQ email management tool"
        Url = "https://rfqautopilot.com/rfq-email-management-tool/"
        Patterns = @(
            '\bRFQ email management tool\b',
            '\bRFQ email management\b',
            '\bmanaging RFQs through email\b',
            '\bmanaging RFQs in email\b'
        )
    },
    @{
        Label = "RFQ software for manufacturers"
        Url = "https://rfqautopilot.com/rfq-software-for-manufacturers/"
        Patterns = @(
            '\bRFQ software for manufacturers\b',
            '\bmanufacturing RFQ software\b',
            '\bmanufacturer RFQ software\b',
            '\bmanufacturing RFQs\b'
        )
    },
    @{
        Label = "AI RFQ processing tool"
        Url = "https://rfqautopilot.com/ai-rfq-processing-tool/"
        Patterns = @(
            '\bAI RFQ processing tool\b',
            '\bAI RFQ processing\b',
            '\bautomated RFQ processing\b'
        )
    },
    @{
        Label = "quotation email automation"
        Url = "https://rfqautopilot.com/quotation-email-automation/"
        Patterns = @(
            '\bquotation email automation\b',
            '\bquote email automation\b',
            '\bquotation automation\b',
            '\bemail quotation workflow\b'
        )
    }
)

$externalLinks = @(
    @{
        Label = "Gmail"
        Url = "https://mail.google.com"
        Patterns = @('\bGmail\b')
    },
    @{
        Label = "Outlook"
        Url = "https://outlook.live.com/"
        Patterns = @(
            '\bMicrosoft Outlook\b',
            '\bOutlook\b'
        )
    },
    @{
        Label = "NIST"
        Url = "https://www.nist.gov"
        Patterns = @(
            '\bNational Institute of Standards and Technology\b',
            '\bNIST\b'
        )
    },
    @{
        Label = "U.S. Small Business Administration"
        Url = "https://www.sba.gov"
        Patterns = @(
            '\bU\.S\. Small Business Administration\b',
            '\bSmall Business Administration\b',
            '\bSBA\b'
        )
    },
    @{
        Label = "ASCM"
        Url = "https://www.ascm.org"
        Patterns = @(
            '\bAssociation for Supply Chain Management\b',
            '\bASCM\b'
        )
    },
    @{
        Label = "Institute for Supply Management"
        Url = "https://www.ismworld.org"
        Patterns = @(
            '\bInstitute for Supply Management\b',
            '\bISM\b'
        )
    },
    @{
        Label = "Gartner"
        Url = "https://www.gartner.com"
        Patterns = @('\bGartner\b')
    }
)

$naturalInternalLinks = 0
$naturalExternalLinks = 0

# Add up to four natural internal links
foreach ($link in $internalLinks) {
    if ($naturalInternalLinks -ge 4) {
        break
    }

    $added = $false

    $body = Add-LinkOnce `
        -Text $body `
        -Patterns $link.Patterns `
        -Url $link.Url `
        -Added ([ref]$added)

    if ($added) {
        $naturalInternalLinks++
    }
}

# Add up to three natural external links
foreach ($link in $externalLinks) {
    if ($naturalExternalLinks -ge 3) {
        break
    }

    $added = $false

    $body = Add-LinkOnce `
        -Text $body `
        -Patterns $link.Patterns `
        -Url $link.Url `
        -Added ([ref]$added)

    if ($added) {
        $naturalExternalLinks++
    }
}

$existingInternal = @(
    $internalLinks |
    Where-Object {
        $body.IndexOf(
            $_.Url,
            [StringComparison]::OrdinalIgnoreCase
        ) -ge 0
    }
)

$existingExternal = @(
    $externalLinks |
    Where-Object {
        $body.IndexOf(
            $_.Url,
            [StringComparison]::OrdinalIgnoreCase
        ) -ge 0
    }
)

# Guarantee at least three internal and two external links
$internalNeeded = [Math]::Max(
    0,
    3 - $existingInternal.Count
)

$externalNeeded = [Math]::Max(
    0,
    2 - $existingExternal.Count
)

$missingInternal = @(
    $internalLinks |
    Where-Object {
        $body.IndexOf(
            $_.Url,
            [StringComparison]::OrdinalIgnoreCase
        ) -lt 0
    } |
    Select-Object -First $internalNeeded
)

$missingExternal = @(
    $externalLinks |
    Where-Object {
        $body.IndexOf(
            $_.Url,
            [StringComparison]::OrdinalIgnoreCase
        ) -lt 0
    } |
    Select-Object -First $externalNeeded
)

if (
    $missingInternal.Count -gt 0 -or
    $missingExternal.Count -gt 0
) {
    $resourceLines = @(
        "",
        "<!-- AUTO BLOG LINKS START -->",
        "## Helpful RFQ and Procurement Resources",
        ""
    )

    foreach ($link in $missingInternal) {
        $resourceLines += "- [$($link.Label)]($($link.Url))"
    }

    foreach ($link in $missingExternal) {
        $resourceLines += "- [$($link.Label)]($($link.Url))"
    }

    $resourceLines += @(
        "",
        "<!-- AUTO BLOG LINKS END -->",
        ""
    )

    $resourceBlock = $resourceLines -join "`r`n"

    $faqMatch = [regex]::Match(
        $body,
        '(?im)^##\s+(FAQ|Frequently Asked Questions)\b'
    )

    if ($faqMatch.Success) {
        $body =
            $body.Substring(
                0,
                $faqMatch.Index
            ).TrimEnd() +
            "`r`n`r`n" +
            $resourceBlock +
            "`r`n" +
            $body.Substring(
                $faqMatch.Index
            ).TrimStart()
    }
    else {
        $body =
            $body.TrimEnd() +
            "`r`n`r`n" +
            $resourceBlock
    }
}

$destination = Join-Path $BlogFolder "$slug.md"

# Back up an existing article before overwriting it
if (Test-Path -LiteralPath $destination) {
    $backupFolder = Join-Path `
        (Split-Path $ProjectPath -Parent) `
        "RFQ-AutoPilot-Backups\blog-articles"

    New-Item `
        -ItemType Directory `
        -Path $backupFolder `
        -Force |
        Out-Null

    $backupName =
        "$slug-$(Get-Date -Format 'yyyyMMdd-HHmmss').md"

    Copy-Item `
        -LiteralPath $destination `
        -Destination (
            Join-Path $backupFolder $backupName
        ) `
        -Force
}

$output = @"
---
title: "$(Escape-Yaml $title)"
description: "$(Escape-Yaml $description)"
pubDate: $pubDate
author: "$(Escape-Yaml $author)"
category: "$(Escape-Yaml $category)"
readingTime: "$(Escape-Yaml $readingTime)"
featured: $featured
---

$body
"@

[System.IO.File]::WriteAllText(
    $destination,
    $output.Trim() + "`r`n",
    [System.Text.UTF8Encoding]::new($false)
)

if (-not (Test-Path -LiteralPath $destination)) {
    throw "Publishing failed. Article file was not created."
}

$publishedArticle = Get-Item -LiteralPath $destination

$finalInternalCount = @(
    $internalLinks |
    Where-Object {
        $body.IndexOf(
            $_.Url,
            [StringComparison]::OrdinalIgnoreCase
        ) -ge 0
    }
).Count

$finalExternalCount = @(
    $externalLinks |
    Where-Object {
        $body.IndexOf(
            $_.Url,
            [StringComparison]::OrdinalIgnoreCase
        ) -ge 0
    }
).Count

Write-Host ""
Write-Host "Article published successfully." -ForegroundColor Green
Write-Host "Source: $Source"
Write-Host "Title: $title"
Write-Host "File: $($publishedArticle.FullName)"
Write-Host "Updated: $($publishedArticle.LastWriteTime)"
Write-Host "Internal links: $finalInternalCount" -ForegroundColor Cyan
Write-Host "External links: $finalExternalCount" -ForegroundColor Cyan
Write-Host "Route: /blog/$slug" -ForegroundColor Yellow