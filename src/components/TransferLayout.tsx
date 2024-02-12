'use client'
import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { convertValue } from '@/lib/convertInput';
import Notification from './Notification';
import { handleFileSelection } from '@/lib/handleUpload';
import { downloadResults } from '@/lib/handleDownlaod';
import { useTranslations } from 'next-intl';


type Format = 'Binary' | 'Octal' | 'Decimal' | 'Hexadecimal' | 'Text'

const TransferLayout = () => {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [fromFormat, setFromFormat] = useState<Format>('Binary')
    const [toFormat, setToFormat] = useState<Format>('Text')
    const [storeResult, setStoreResult] = useState<string[]>([])
    const [showNotification, setShowNotification] = useState(false)
    const [error, setError] = useState<string>('')

    const t = useTranslations("Index");

    const handleConvert = () => {
        try {
            const result = convertValue(input, fromFormat, toFormat)
            setOutput(result)
            // results can be downloaded or copied
            setStoreResult([...storeResult, result])
        } catch (error) {
            setShowNotification(true)
            setError((error as Error).message)
        }
    }
    const handleSwap = () => {
        setFromFormat(toFormat)
        setToFormat(fromFormat)
        setInput(output)
        setOutput(input)
        setShowNotification(false)
    }
    const handleClear = () => {
        setInput('')
        setOutput('')
        setShowNotification(false)
    }
    const handleInputFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const text = await handleFileSelection(event)
            setInput(text)
            event.target.value = ''
        } catch (error) {
            setShowNotification(true)
            setError((error as Error).message)
        }
    }

    const handleDownload = () => {
        downloadResults(input, output)
    }

    const handleCopy = async () => {
        if (output) {
            try {
                await navigator.clipboard.writeText(output); // Copy text to clipboard
                alert('Text copied to clipboard');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }
    };
    
    return (
        <>
            {showNotification && <Notification error={error} setShowNotification={setShowNotification} />}
            <div className='grid sm:grid-cols-8 gap-6'>
                <div className='col-span-4'>
                    <div className="mt-2">
                        <div className='flex justify-between items-baseline'>
                            <select
                                id="fromSelect"
                                name="fromSelect"
                                className="font-semibold mt-2 block rounded-md border-0 py-3  text-gray-900 dark:bg-[#24283b] dark:text-slate-100 sm:text-sm sm:leading-6 outline-none"
                                value={fromFormat}
                                onChange={(e) => setFromFormat(e.target.value as Format)}
                            >
                                <option value="Binary">{t("transfer.Binary")}</option>
                                <option value="Octal">{t("transfer.Octal")}</option>
                                <option value="Decimal">{t("transfer.Decimal")}</option>
                                <option value="Hexadecimal">{t("transfer.Hexadecimal")}</option>
                                <option value="Text">{t("transfer.Text")}</option>
                            </select>
                            <div className='space-x-4'>
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md outline-none font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
                                >
                                    <i className="bi bi-upload text-xl"></i>
                                    <input id="file-upload" onChange={handleInputFile} name="file-upload" type="file" accept='.txt' className="sr-only" />
                                </label>
                                <button>
                                    <i aria-label="Eraser" onClick={handleClear} className="bi bi-eraser text-xl" />
                                </button>
                            </div>
                        </div>
                        <textarea
                            rows={6}
                            name="fromFormat"
                            id="fromFormat"
                            className="p-4 dark:bg-[#343b58] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 dark:text-gray-100"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            type="button"
                            className="rounded-md mt-7 w-full bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            onClick={handleConvert}
                        >
                            {t("button.decode")}
                        </button>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className="mt-2">
                        <div className='flex justify-between items-baseline'>
                            <select
                                id="fromSelect"
                                name="fromSelect"
                                className="font-semibold mt-2 block rounded-md border-0 py-3  text-gray-900 dark:bg-[#24283b] dark:text-slate-100 sm:text-sm sm:leading-6 outline-none"
                                value={toFormat}
                                onChange={(e) => setToFormat(e.target.value as Format)}
                            >
                                <option value="Binary">{t("transfer.Binary")}</option>
                                <option value="Octal">{t("transfer.Octal")}</option>
                                <option value="Decimal">{t("transfer.Decimal")}</option>
                                <option value="Hexadecimal">{t("transfer.Hexadecimal")}</option>
                                <option value="Text">{t("transfer.Text")}</option>
                            </select>

                            <div className='space-x-4'>
                                <button aria-label="Download">
                                    <i className="bi bi-download text-xl" onClick={handleDownload}></i>
                                </button>
                                <button aria-label="Copy">
                                    <i className="bi bi-copy text-xl" onClick={handleCopy} />
                                </button>
                            </div>
                        </div>
                        <textarea
                            rows={6}
                            name="toFormat"
                            id="toFormat"
                            className="p-4 dark:bg-[#262b40] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 dark:text-gray-100 hover:cursor-not-allowed"
                            value={output}
                            disabled={true}
                            onChange={(e) => setOutput(e.target.value)}
                        />
                        <button
                            type="button"
                            className="rounded-md mt-7 w-full bg-pink-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                            onClick={handleSwap}
                        >
                            {t("button.swap")}
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TransferLayout
