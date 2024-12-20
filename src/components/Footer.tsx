import Link from 'next/link'
import Image from "next/image"
import { ContainerInner, ContainerOuter } from '@/components/Container'
import logo from "@/app/ship.png"

function NavLink({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <Link
            href={href}
            className="transition hover:text-teal-500 dark:hover:text-teal-400"
        >
            {children}
        </Link>
    )
}

export function Footer() {
    return (
        <footer className="mt-32 flex-none">
            <ContainerOuter>
                <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">

                    <ContainerInner>
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                <Link href="https://resumego.io/" target="blank" title="AI Resume tailor" className="link link-hover">
                                    ResumeGo
                                </Link>
                                <Link href="https://photorater.io/" target="blank" title="AI photo rating app" className="link link-hover">
                                    Photo Rater
                                </Link>
                                <Link href="https://www.sunodownloader.io/ai-music-generator" target="blank" title="AI Music Generator" className="link link-hover">
                                    AI Music Generator
                                </Link>
                                <Link href="https://soundifytext.io/" target="blank" title="AI sound effects generator" className="link link-hover">
                                    Soundify
                                </Link>
                                <Link href="https://flux1ai.ai/" target="blank" title="Flux AI Image Generator" className="link link-hover">
                                    Flux AI Image Generator
                                </Link>
                                <Link href="https://hdphotoconverter.net/" target="blank" title="HD Photo Converter" className="link link-hover">
                                    HD Photo Converter
                                </Link>
                                <Link href="https://hdimageconverter.net/" target="blank" title="HD Image Converter" className="link link-hover">
                                    HD Image Converter
                                </Link>
                                <Link href="https://sprunkiincrediboxes.net/" target="blank" title="Sprunki Incrediboxes" className="link link-hover">
                                    Sprunki Incrediboxes
                                </Link>
                                <Link href="https://actone.app/" target="blank" title="Mochi 1 Ai video generator" className="link link-hover">
                                    Mochi 1 Ai video generator
                                </Link>
                            </div>
                            <p className="text-sm text-zinc-400 dark:text-zinc-500">
                                &copy; {new Date().getFullYear()} Binary Decode. All rights
                                reserved.
                            </p>
                        </div>
                    </ContainerInner>
                </div>
            </ContainerOuter>
        </footer>
    )
}
