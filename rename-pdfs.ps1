$assetsPath = "c:\wamp64\www\didcoolboy.github.io\assets"

# Rename PDFs to remove spaces and special characters
Get-ChildItem -Path $assetsPath -Filter "*.pdf" | ForEach-Object {
    $oldName = $_.FullName
    $newName = $_.Name `
        -replace "_Non-respect de la charte de nommage\.pdf", "non-respect-charte-nommage.pdf" `
        -replace "charte-nommage-demande\.pdf\.pdf", "charte-nommage-demande.pdf"
    
    if ($newName -ne $_.Name) {
        $newPath = Join-Path $assetsPath $newName
        Rename-Item -Path $oldName -NewName $newPath -Force
        Write-Output "Renamed: $($_.Name) -> $newName"
    }
}

Write-Output "`nPDFs in assets:"
Get-ChildItem -Path $assetsPath -Filter "*.pdf" | ForEach-Object { Write-Output "  $($_.Name)" }
