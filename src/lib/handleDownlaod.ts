export function downloadResults(inputValue: string, outputValue: string) {
    // Format the content
    const content = `Input Value: \n${inputValue}\n\n\nOutput Value: \n${outputValue}`

    // Create a Blob with the content
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })

    // Create a URL for the Blob
    const fileURL = URL.createObjectURL(blob)

    // Create an anchor element and trigger the download
    const link = document.createElement('a')
    link.href = fileURL
    link.download = 'conversionResults.txt' // Name of the file to be downloaded
    document.body.appendChild(link) // Required for Firefox
    link.click()

    // Clean up by revoking the Blob URL and removing the anchor element
    URL.revokeObjectURL(fileURL)
    document.body.removeChild(link)
}
