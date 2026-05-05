import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaBars, FaTimes, FaHome, FaUser, FaCogs, FaStar, FaFolderOpen, FaEnvelope, FaGraduationCap, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import logoImg from '../assets/images/mon logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useTheme()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquer le scroll quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { label: t('nav.home'),     icon: <FaHome />,          href: '#home' },
    { label: t('nav.about'),    icon: <FaUser />,          href: '#about' },
    { label: t('nav.services'), icon: <FaCogs />,          href: '#services' },
    { label: t('nav.skills'),   icon: <FaStar />,          href: '#skills' },
    { label: t('nav.parcours'), icon: <FaGraduationCap />, href: '#education' },
    { label: t('nav.projects'), icon: <FaFolderOpen />,    href: '#projects' },
    { label: t('nav.contact'),  icon: <FaEnvelope />,      href: '#contact' },
  ]

  const navScrolled = scrolled
    ? 'bg-[rgba(11,26,43,0.45)] backdrop-blur-xl border-b border-[rgba(42,127,193,0.15)] shadow-lg'
    : 'bg-transparent'

  const linkClass = dark
    ? 'text-white/75 hover:text-white hover:bg-[rgba(42,127,193,0.15)]'
    : 'text-[#14263B] hover:text-[#2a7fc1] hover:bg-[rgba(20,38,59,0.07)]'

  return (
    <>
      <nav className={`fixed top-0 w-full z-[1000] flex items-center justify-between px-[6%] h-[68px] transition-all duration-300 ${navScrolled}`}>

        {/* Logo */}
        <a href="#home" className="flex items-center z-[1001]">
          <img src={logoImg} alt="AJR Logo" className="h-14 w-14 rounded-full object-cover hover:scale-105 transition-transform duration-300" />
        </a>

        {/* Desktop Links */}
        <ul className="flex list-none gap-1 m-0 p-0 items-center max-[900px]:hidden">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[0.85rem] font-medium transition-all duration-300 whitespace-nowrap ${linkClass}`}>
                <span className="text-[0.8rem] text-[var(--gold)] flex">{l.icon}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-1.5 z-[1001]">
          <button onClick={toggle}
            className="flex items-center px-2.5 py-2 rounded-lg bg-[rgba(42,127,193,0.1)] border border-[rgba(42,127,193,0.2)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300"
            style={{ color: dark ? 'rgba(255,255,255,0.7)' : '#14263B' }}>
            {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          {['fr', 'en'].map(lng => (
            <button key={lng} onClick={() => i18n.changeLanguage(lng)}
              className={`px-2.5 py-1.5 rounded-lg text-[0.82rem] font-semibold border transition-all duration-300
                ${i18n.language === lng
                  ? 'bg-[var(--gold)] text-white border-[var(--gold)]'
                  : 'bg-[rgba(42,127,193,0.1)] border-[rgba(42,127,193,0.2)] hover:bg-[var(--gold)] hover:text-white'
                }`}
              style={{ color: i18n.language === lng ? '#fff' : dark ? 'rgba(255,255,255,0.7)' : '#14263B' }}>
              {lng.toUpperCase()}
            </button>
          ))}

          {/* Hamburger — mobile only */}
          <button onClick={() => setOpen(!open)}
            className="hidden max-[900px]:flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(42,127,193,0.1)] border border-[rgba(42,127,193,0.2)] transition-all duration-300"
            style={{ color: dark ? '#fff' : '#14263B' }}
            aria-label="Toggle menu">
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm max-[900px]:block hidden"
          onClick={() => setOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-[70%] max-w-[300px] z-[1000] flex flex-col justify-center px-8 gap-2
        bg-[rgba(11,26,43,0.97)] backdrop-blur-2xl border-l border-[rgba(42,127,193,0.2)]
        transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}
        min-[900px]:hidden`}>

        {/* Close button inside menu */}
        <button onClick={() => setOpen(false)}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-lg bg-[rgba(42,127,193,0.15)] text-white/70 hover:text-white hover:bg-[rgba(42,127,193,0.3)] transition-all">
          <FaTimes size={16} />
        </button>

        {links.map(l => (
          <a key={l.label} href={l.href}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-[rgba(42,127,193,0.15)] transition-all duration-300 text-base font-medium">
            <span className="text-[var(--gold)] text-lg">{l.icon}</span>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
