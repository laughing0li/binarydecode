type Format = 'Binary' | 'Octal' | 'Decimal' | 'Hexadecimal' | 'Text'

// function isValidInput(input: string, format: Format): boolean {
//     switch (format) {
//         case 'Binary':
//             return /^[01]+$/.test(input)
//         case 'Octal':
//             return /^[0-7]+$/.test(input)
//         case 'Decimal':
//             return /^\d+$/.test(input)
//         case 'Hexadecimal':
//             return /^[0-9a-fA-F]+$/.test(input)
//         case 'Text': // Assuming any string is valid text
//             return true
//         default:
//             return false
//     }
// }
function isValidInput(input: string, format: Format): boolean {
    switch (format) {
        case 'Binary':
            return /^[01\s]*[01][01\s]*$/.test(input)
        case 'Octal':
            return /^[0-7\s]*[0-7][0-7\s]*$/.test(input)
        case 'Decimal':
            return /^\d[\d\s]*\d$|^\d$/.test(input)
        case 'Hexadecimal':
            return /^[0-9a-fA-F\s]*[0-9a-fA-F][0-9a-fA-F\s]*$/.test(input)
        case 'Text': // Assuming any string is valid text
            return true
        default:
            return false
    }
}

function formatOutput(value: string, format: Format): string {
    switch (format) {
        case 'Binary':
            // 每八位添加一个空格
            return value.replace(/(.{8})/g, '$1 ').trim()
        case 'Octal':
            // 每三位添加一个空格
            return value.replace(/(.{3})/g, '$1 ').trim()
        case 'Decimal':
            // 每三位添加一个逗号，从右往左
            return value
                .split('')
                .reverse()
                .join('')
                .replace(/(.{3})/g, '$1,')
                .split('')
                .reverse()
                .join('')
                .trim()
                .replace(/^,/, '')
        case 'Hexadecimal':
            // 每四位添加一个空格
            return value.replace(/(.{4})/g, '$1 ').trim().toUpperCase() // Convert to uppercase
        default:
            return value
    }
}

export function convertValue(
    input: string,
    fromFormat: Format,
    toFormat: Format,
): string {
    // Validate input format
    if (!isValidInput(input, fromFormat)) {
        throw new Error(`Invalid input for format: ${fromFormat}`)
    }
    if (fromFormat === 'Text' && toFormat === 'Text') {
        return input
    }
    // For text, direct conversions without going through decimal
    if (fromFormat === 'Text' && toFormat !== 'Text') {
        input = textToDecimal(input).toString()
        fromFormat = 'Decimal'
    } else if (fromFormat !== 'Text' && toFormat === 'Text') {
        return convertDecimalToText(convertToDecimal(input, fromFormat))
    }

    let decimalValue: bigint =
        fromFormat !== 'Text' ? convertToDecimal(input, fromFormat) : BigInt(0)
    let result: string = ''

    // Convert from intermediary (decimal or original text) to desired format
    switch (toFormat) {
        case 'Binary':
            result = decimalValue.toString(2)
            break
        case 'Octal':
            result = decimalValue.toString(8)
            break
        case 'Decimal':
            result = decimalValue.toString(10)
            break
        case 'Hexadecimal':
            result = decimalValue.toString(16)
            break
        case 'Text':
            return convertDecimalToText(decimalValue)
    }

    // Apply formatting based on the output format
    return formatOutput(result, toFormat)
}

function convertToDecimal(
    input: string,
    format: Exclude<Format, 'text'>,
): bigint {
    input = input.replace(/\s/g, ''); // Remove spaces
    switch (format) {
        case 'Binary':
            return BigInt(`0b${input}`)
        case 'Octal':
            return BigInt(`0o${input}`)
        case 'Decimal':
            return BigInt(input)
        case 'Hexadecimal':
            return BigInt(`0x${input}`)
        default:
            throw new Error('Unsupported input format for conversion to decimal')
    }
}

function convertDecimalToText(decimalValue: bigint): string {
    let text = ''
    while (decimalValue > 0) {
        text = String.fromCodePoint(Number(decimalValue % 0x10ffffn)) + text
        decimalValue /= 0x10ffffn
    }
    return text
}

function textToDecimal(text: string): bigint {
    return text
        .split('')
        .reduce((acc, char) => acc * 256n + BigInt(char.charCodeAt(0)), 0n)
}
