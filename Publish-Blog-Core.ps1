param(
    [string]$Source = "$HOME\Downloads\single-blog.md"
)

$ErrorActionPreference = "Stop"

$ProjectPath = "D:\Projects\RFQ-Website\RFQ-AutoPilot"
$BlogFolder = Join-Path $ProjectPath "src\content\blog"

if (-not (Test-Path -LiteralPath $Source)) {
    throw "Article file not found: $Source"
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

function Get-FrontmatterField {
    param(
        [string]$Name,
        [string]$DefaultValue = ""
    )

    if ([string]::IsNullOrWhiteSpace($frontmatter)) {
        return $DefaultValue
    }

    $pattern = '(?m)^\s*' + [regex]::Escape($Name) + ':\s*(?<value>.*?)\s*$'
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

    return $Value.Replace('\', '\\').Replace('"', '\"')
}

$title = Get-FrontmatterField "title"
$description = Get-FrontmatterField "description"
$slug = Get-FrontmatterField "slug"
$pubDate = Get-FrontmatterField "pubDate"
$readingTime = Get-FrontmatterField "readingTime"
$author = Get-FrontmatterField "author" "Walid Hasan"
$category = Get-FrontmatterField "category" "RFQ Automation"
$featured = Get-FrontmatterField "featured" "false"

# Use the first H1 as title when frontmatter title is missing
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
    throw "Missing title. Add title frontmatter or begin the article with an H1."
}

# Remove duplicate H1 from the article body
$body = [regex]::Replace(
    $body,
    '(?m)^\s*#\s+.+?\r?\n+',
    '',
    1
).Trim()

# Generate slug when missing
if ([string]::IsNullOrWhiteSpace($slug)) {
    $slug = $title.ToLowerInvariant()
    $slug = $slug -replace '&', ' and '
    $slug = $slug -replace '[^a-z0-9]+', '-'
    $slug = $slug.Trim('-')
}

if ([string]::IsNullOrWhiteSpace($slug)) {
    throw "Could not generate a valid article slug."
}

# Generate description when missing
if ([string]::IsNullOrWhiteSpace($description)) {
    $paragraphs = [regex]::Split($body, '\r?\n\s*\r?\n')

    foreach ($paragraph in $paragraphs) {
        $clean = $paragraph `
            -replace '\[([^\]]+)\]\([^)]+\)', '$1' `
            -replace '[#*`>_~]', '' `
            -replace '\s+', ' '

        $clean = $clean.Trim()

        if (
            $clean.Length -ge 40 -and
            -not $clean.StartsWith("-")
        ) {
            $description = $clean
            break
        }
    }

    if ([string]::IsNullOrWhiteSpace($description)) {
        $description = $title
    }

    if ($description.Length -gt 157) {
        $description = $description.Substring(0, 157).TrimEnd() + "..."
    }
}

if ([string]::IsNullOrWhiteSpace($pubDate)) {
    $pubDate = Get-Date -Format "yyyy-MM-dd"
}

# Generate reading time when missing
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

# Normalize featured value
$featured = $featured.ToLowerInvariant()

if ($featured -notin @("true", "false")) {
    $featured = "false"
}

# Remove WordPress SEO keyword notes from article bottom
$body = [regex]::Replace(
    $body,
    '(?ims)^\s*(Focus keyword|Long-tail keywords|Additional related keywords|Related SEO keywords):.*\z',
    ''
).Trim()

$destination = Join-Path $BlogFolder "$slug.md"

# Backup the existing post when the same slug is used
if (Test-Path -LiteralPath $destination) {
    $backupFolder = Join-Path `
        (Split-Path $ProjectPath -Parent) `
        "RFQ-AutoPilot-Backups\blog-articles"

    New-Item -ItemType Directory -Path $backupFolder -Force | Out-Null

    $backupName = "$slug-$(Get-Date -Format 'yyyyMMdd-HHmmss').md"

    Copy-Item `
        -LiteralPath $destination `
        -Destination (Join-Path $backupFolder $backupName) `
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
    throw "Publishing failed. The destination article was not created."
}

$article = Get-Item -LiteralPath $destination

Write-Host ""
Write-Host "Article published successfully." -ForegroundColor Green
Write-Host "Source: $Source"
Write-Host "Title: $title"
Write-Host "File: $($article.FullName)"
Write-Host "Updated: $($article.LastWriteTime)"
Write-Host "Route: /blog/$slug" -ForegroundColor Cyan