'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Container } from '@/components/Container'
import { useTranslations } from 'next-intl'
import LanSwitcher from './LanSwitcher'
import Link from 'next/link'
import Banner from './Banner'

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'light' ? 'dark' : 'light'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-slate-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-slate-500" />
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-slate-50 [@media(prefers-color-scheme:dark)]:stroke-slate-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-slate-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-slate-600" />
    </button>
  )
}

function clamp(number: number, a: number, b: number) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

const Names = [
  { 'what-is-octal-code': 'octal-code' },
  { 'what-is-hexadecimal-code': 'hex-code' },
  { 'what-is-binary-code': 'binary-code' },
  { 'binary-to-decimal-conversion': 'binary-to-decimal' },
  { 'binary-to-hexadecimal-conversion': 'binary-to-hex' },
  { 'binary-to-octal-conversion': 'binary-to-octal' },
  { 'binary-to-text-conversion': 'binary-to-text' },
  { 'decimal-to-binary-conversion': 'decimal-to-binary' },
  { 'decimal-to-hexadecimal-conversion': 'decimal-to-hex' },
  { 'decimal-to-octal-conversion': 'decimal-to-octal' },
  { 'decimal-to-text-conversion': 'decimal-to-text' },
  { 'octal-to-binary-conversion': 'octal-to-binary' },
  { 'octal-to-decimal-conversion': 'octal-to-decimal' },
  { 'octal-to-hexadecimal-conversion': 'octal-to-hex' },
  { 'octal-to-text-conversion': 'octal-to-text' },
  { 'hexadecimal-to-binary-conversion': 'hex-to-binary' },
  { 'hexadecimal-to-decimal-conversion': 'hex-to-decimal' },
  { 'hexadecimal-to-octal-conversion': 'hex-to-octal' },
  { 'hexadecimal-to-text-conversion': 'hex-to-text' }
]

export function Header() {
  const t = useTranslations("Index");
  let isHomePage = usePathname() === '/'
  const pathItems = usePathname().split('/').filter((item) => item.includes('-'))
  let pathName = ''

  if (pathItems.length > 0) pathName = pathItems[0]
  const key = pathItems[0] as keyof typeof Names[number];
  const obj = Names.find((item) => key in item);
  const value = obj ? obj[key] : undefined;
  // errors here
  const h = useTranslations(value);

  let headerRef = useRef<React.ElementRef<'div'>>(null)
  let avatarRef = useRef<React.ElementRef<'div'>>(null)
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return
      }

      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`,
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
    <Banner/>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        <div
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{
              position:
                'var(--header-inner-position)' as React.CSSProperties['position'],
            }}
          >
            <div className="relative flex gap-4 pt-4 mb-16">

              <div className="flex flex-1 pointer-events-auto">
                <Link href='/'>
                  <i className="bi bi-house text-2xl mr-3" />
                </Link>
                <LanSwitcher />
              </div>
              {
                (pathItems.length > 0) ?
                  <h1 className="text-md font-mono font-bold tracking-tight text-slate-500 sm:text-xl dark:text-zinc-400">
                    {h('title')}
                  </h1> :
                  <h1 className="text-2xl font-mono font-bold tracking-tight text-slate-500 sm:text-3xl dark:text-zinc-400">
                    {t('Header.title')}
                  </h1>
              }
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  )
}