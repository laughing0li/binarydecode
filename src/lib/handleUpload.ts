// Assuming this is in a TypeScript file (.ts) or a TypeScript React component (.tsx)

function extractTextFromFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (event) => {
            if (typeof event.target?.result === 'string') {
                resolve(event.target.result)
            } else {
                reject(new Error('File content could not be read as text.'))
            }
        }
        reader.onerror = () => reject(new Error('Error reading file.'))
        reader.readAsText(file)
    })
}

// Example usage in an async context
export async function handleFileSelection(
    event: React.ChangeEvent<HTMLInputElement>,
): Promise<string> {
    if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0]
        try {
            const text = await extractTextFromFile(file)
            // Here, you can return the extracted text for further processing
            return text
        } catch (error) {
            console.error('Error extracting text from file:', error)
            throw error // Propagate the error if needed
        }
    } else {
        throw new Error('No file selected')
    }
}
