
export default function Faqs() {
    return (
        <div className="bg-white dark:bg-[#24283b] text-slate-700 dark:text-zinc-300">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <h2 className="text-3xl font-bold leading-10 tracking-tight ">Frequently asked questions</h2>
                <div className="pt-10">
                    <h3 className="text-xl font-semibold">
                        What is Binary code?
                    </h3>
                    <p className="font-light pt-2">
                        Binary code is a system of representing text or computer processor instructions using the binary number system&apos;s two binary digits, 0 and 1. This coding system underlies the operation of all digital computers and many other types of digital systems. In binary code, each digit within a binary number is referred to as a bit (short for binary digit), which is the smallest unit of data in computing.
                    </p>
                    <p className="font-light pt-2">
                        Binary code is more like human language but is for computers. Without binary code, computers would not be able to store data or perform complex calculations.
                    </p>
                </div>
                <div className="pt-10">
                    <h3 className="text-xl font-semibold">
                        What is Binary decode?
                    </h3>
                    <p className="font-light pt-2">
                        Binary decode refers to the process of converting binary code—data represented in the binary numeral system of 0s and 1s—into other numeric formats (such as decimal, octal, hexadecimal) or into human-readable text. This process is fundamental in computing and digital communications, where binary data needs to be decoded or displayed in a more understandable form for analysis, processing, or interaction.
                    </p>
                </div>
                <div className="pt-10">
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
                <div className="pt-10">
                    <h3 className="text-xl font-semibold">
                        Is the Binary decode online translator free?
                    </h3>
                    <p className="font-light pt-2">
                        Binary Decode Online Translator is entirely free for everyone. Whether you&apos;re a student, professional, hobbyist, or just curious about binary octal or hexadecimal code, you can use our tool without any cost.
                    </p>
                </div>
                <div className="pt-10">
                    <h3 className="text-xl font-semibold">
                        Is the Binary decode online translator safe?
                    </h3>
                    <p className="font-light pt-2">
                        The Binary Decode Online Translator prioritizes your privacy and data security. The translator processes your data in real-time without storing any of your information on our servers. Once your session ends, the data you&apos;ve inputted and the results generated are not saved, ensuring your information remains confidential.
                    </p>
                </div>
                <div className="pt-10">
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
                    <p className="font-light pt-2">

                    </p>
                </div>
            </div>
        </div>
    )
}
