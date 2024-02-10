
export default function Faqs() {
    return (
        <div className="bg-white dark:bg-[#24283b] text-slate-700 dark:text-zinc-300">
            <div className="mx-auto max-w-7xl py-20 sm:py-20 lg:py-20">
                <h2 className="text-3xl font-bold leading-10 tracking-tight ">Frequently asked questions</h2>
                <div className="pt-10" id="faq1">
                    <h3 className="text-xl font-semibold">
                        What is Binary code system?
                    </h3>
                    <p className="font-light pt-2">
                        Binary code is a system of representing text or computer processor instructions using the binary number system&apos;s two binary digits, 0 and 1. This coding system underlies the operation of all digital computers and many other types of digital systems. In binary code, each digit within a binary number is referred to as a bit (short for binary digit), which is the smallest unit of data in computing.
                    </p>
                    <p className="font-light pt-2">
                        Binary code is more like human language but is for computers. Without binary code, computers would not be able to store data or perform complex calculations.
                    </p>
                </div>
                <div className="pt-10" id="faq2">
                    <h3 className="text-xl font-semibold">
                        What is Hexadecimal code system?
                    </h3>
                    <p className="font-light pt-2">
                        Hexadecimal, often shortened to hex, is a base-16 numeral system. Unlike the decimal system (base-10) which uses 10 digits (0 through 9), the hexadecimal system uses 16 symbols to represent values. It includes the standard decimal digits (0 to 9) and six additional symbols represented by the letters A through F, where A stands for 10, B for 11, C for 12, D for 13, E for 14, and F for 15.
                    </p>
                    <p className="font-light pt-2">
                        The decimal code is the most common way to represent numbers, and it is the primary number system used in arithmetic and mathematics.
                    </p>
                </div>
                <div className="pt-10" id="faq3">
                    <h3 className="text-xl font-semibold">
                        What is Octal code system?
                    </h3>
                    <p className="font-light pt-2">
                        The octal number system, or octal code, is a base-8 numeral system that uses eight symbols: 0, 1, 2, 3, 4, 5, 6, and 7. It&apos;s a compact representation of binary data, where each octal digit represents three binary digits (bits), making it simpler to read and understand large binary numbers for humans.
                    </p>
                    <p className="font-light pt-2">
                        Octal code offers a more human-readable way to interpret binary code, reducing the likelihood of errors in reading or transcribing long sequences of binary code.
                    </p>
                </div>
                <div className="pt-10" id="faq4">
                    <h3 className="text-xl font-semibold">
                        What is Binary decode?
                    </h3>
                    <p className="font-light pt-2">
                        Binary decode refers to the process of converting binary code—data represented in the binary numeral system of 0s and 1s—into other numeric formats (such as decimal, octal, hexadecimal) or into human-readable text. This process is fundamental in computing and digital communications, where binary data needs to be decoded or displayed in a more understandable form for analysis, processing, or interaction.
                    </p>
                </div>
                <div className="pt-10" id="faq5">
                    <h3 className="text-xl font-semibold">
                        How to use the Binary decode online translator?
                    </h3>
                    <div className="font-light pt-2">
                        <ol className="list-decimal pl-6">
                            <li>Choose the format you want to decode.</li>
                            <li>Choose the format you want to decode into.</li>
                            <li>Enter or paste the binary code you want to decode.</li>
                            <li>You can upload a file with the format information that you want to decode.</li>
                            <li>Click the decode button.</li>
                            <li>Copy the decoded result or download it to file.</li>
                            <li>You can use the swap format to swap the format</li>
                        </ol>
                    </div>
                </div>

                <div className="pt-10" id="faq6">
                    <h3 className="text-xl font-semibold">
                        The principles of the decode binary code to decimal.
                    </h3>
                    <div className="font-light pt-2">
                        <ol className="list-decimal pl-6">
                            <li>Using binary <strong className="text-xl font-semibold">1101</strong> as an example</li>
                            <li>Starting from the right (least significant bit), the positions are 2<sup>0</sup>, 2<sup>1</sup>, 2<sup>2</sup> and 2<sup>3</sup></li>
                            <li>The binary code `1101` means there&apos;s a `1` in the 2<sup>3</sup>, 2<sup>2</sup>, 2<sup>0</sup> and a `0` in the 2<sup>1</sup></li>
                            <li>The far right digit is `1`, so 2<sup>0</sup> X 1 = 1</li>
                            <li>Moving left, the next digit is `0`, so 2<sup>1</sup> X 0 = 0</li>
                            <li>Then `1` again, so 2<sup>2</sup> X 1 = 4</li>
                            <li>And the leftmost `1`, so 2<sup>3</sup> X 1 = 8</li>
                            <li>Adding the results together, 1 + 0 + 4 + 8 = 13</li>
                        </ol>
                    </div>
                </div>
                <div className="pt-10" id="faq7">
                    <h3 className="text-xl font-semibold">
                        The principles of the decode decimal code to binary.
                    </h3>
                    <div className="font-light pt-2">
                        <ol className="list-decimal pl-6">
                            <li>Using decimal <strong className="text-xl font-semibold">26</strong> as an example</li>
                            <li>Divide the decimal number by 2 (the base of the binary code)</li>
                            <li>26 ÷ 2 = 13, Remainder = 0</li>
                            <li>13 ÷ 2 = 6, Remainder = 1</li>
                            <li>6 ÷ 2 = 3, Remainder = 0</li>
                            <li>3 ÷ 2 = 1, Remainder = 1</li>
                            <li>1 ÷ 2 = 0, Remainder = 1 (When the quotient is 0, the process stops)</li>
                            <li>Collect all remainders: 11010 is the binary code</li>
                        </ol>
                    </div>
                </div>
                <div className="pt-10" id="faq8">
                    <h3 className="text-xl font-semibold">
                        The principles of the decode binary code to hexadecimal.
                    </h3>
                    <div className="font-light pt-2">
                        <ol className="list-decimal pl-6">
                            <li>Converting binary to hexadecimal involves grouping the binary digits into sets of four (starting from the right) and then converting each group into its hexadecimal equivalent. Hexadecimal is a base-16 system, using digits 0-9 and letters A-F to represent values 10 to 15.</li>
                            <li>Using decimal <strong className="text-xl font-semibold">110101101011</strong> as an example</li>
                            <li>First group the binary, add leading zeros if necessary: <strong className="text-xl font-semibold">1101 0110 1011</strong> </li>
                            <li>Convert each binary group to its hexadecimal equivalent</li>
                            <li>Leftmost `1101`: in hexadecimal (1*2<sup>3</sup> + 1*2<sup>2</sup> + 0*2<sup>1</sup> + 1*2<sup>0</sup> = 13, which is D in hex).</li>
                            <li>Middle `0110`: in hexadecimal (0*2<sup>3</sup> + 1*2<sup>2</sup> + 1*2<sup>1</sup> + 0*2<sup>0</sup> = 6).</li>
                            <li>Rightmost `1011`: in hexadecimal (1*2<sup>3</sup> + 0*2<sup>2</sup> + 1*2<sup>1</sup> + 1*2<sup>0</sup> = 11, which is B in hex).</li>
                            <li>Result: <strong className="text-xl font-semibold">D6B</strong></li>
                        </ol>
                    </div>
                </div>

                <div className="pt-10" id="faq9">
                    <h3 className="text-xl font-semibold">
                        The principles of decode hexadecimal to binary code?
                    </h3>
                    <ol className="list-decimal pl-6">
                        <li>Using hexadecimal <strong className="text-xl font-semibold">1A3F</strong> as an example</li>
                        <li>`1` in hexadecimal is `0001` in binary</li>
                        <li>`A` in hexadecimal represents 10. Using <a className="text-lg font-semibold" href="#faq7">decimal convert to binary</a>, which is `1010` in binary </li>
                        <li>`3` in hexadecimal is `0011` in binary</li>
                        <li>`F` in hexadecimal represents 15, which is `1111` in binary</li>
                        <li>Result: <strong className="text-xl font-semibold">0001101000111111</strong></li>
                        <li>You can also remove the leading 0 for the result</li>
                    </ol>
                </div>

                <div className="pt-10" id="faq10">
                    <h3 className="text-xl font-semibold">
                        The principles of decode binary to octal code?
                    </h3>
                    <ol className="list-decimal pl-6">
                        <li>Using octal <strong className="text-xl font-semibold">101110101</strong> as an example</li>
                        <li>Group binary: 001 011 101 101</li>
                        <li>`001` converts to `1` in octal.</li>
                        <li>`011` converts to `3` in octal.</li>
                        <li>`101` converts to `5` in octal.</li>
                        <li>`101` converts to `5` in octal.</li>
                        <li>Result: <strong className="text-xl font-semibold">1355</strong></li>
                    </ol>
                </div>

                <div className="pt-10" id="faq11">
                    <h3 className="text-xl font-semibold">
                        The principles of decode octal to binary code?
                    </h3>
                    <ol className="list-decimal pl-6">
                        <li>Using octal <strong className="text-xl font-semibold">3177</strong> as an example</li>
                        <li>`3` in octal is `011` in binary</li>
                        <li>`1` in octal is `001` in binary</li>
                        <li>`7` in octal is `111` in binary</li>
                        <li>`7` in octal is `111` in binary</li>
                        <li>Result: <strong className="text-xl font-semibold">011001111111</strong></li>
                    </ol>
                </div>

                <div className="pt-10" id="faq12">
                    <h3 className="text-xl font-semibold">
                        Is the Binary decode online translator free?
                    </h3>
                    <p className="font-light pt-2">
                        Binary Decode Online Translator is entirely free for everyone. Whether you&apos;re a student, professional, hobbyist, or just curious about binary octal or hexadecimal code, you can use our tool without any cost.
                    </p>
                </div>
                <div className="pt-10" id="faq13">
                    <h3 className="text-xl font-semibold">
                        Is the Binary decode online translator safe?
                    </h3>
                    <p className="font-light pt-2">
                        The Binary Decode Online Translator prioritizes your privacy and data security. The translator processes your data in real-time without storing any of your information on our servers. Once your session ends, the data you&apos;ve inputted and the results generated are not saved, ensuring your information remains confidential.
                    </p>
                </div>
            </div>
        </div>
    )
}
