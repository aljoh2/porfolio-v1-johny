import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import logoImg from '../assets/images/mon logo.png'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--gold-dim)] py-12 px-[6%] text-center">
      <div className="flex flex-col items-center gap-4">
        <a href="#home" className="flex items-center justify-center">
          <img src={logoImg} alt="AJR Logo" className="h-12 w-auto hover:scale-105 transition-transform duration-300" />
        </a>
        <p className="text-[var(--text-sub)] text-sm">{t('footer.tagline')}</p>
        <div className="flex gap-3">
          {[
            { href: 'https://github.com/aljoh2', icon: <FaGithub /> },
            { href: 'https://www.linkedin.com/in/johny-alain-randrianandrasana-27b6aa1a3/', icon: <FaLinkedin /> },
            { href: 'https://wa.me/261348485184', icon: <FaWhatsapp /> },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer"
              className="w-9 h-9 border border-[var(--gold-dim)] rounded-full flex items-center justify-center text-[var(--text-sub)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all duration-300">
              {s.icon}
            </a>
          ))}
        </div>
        <p className="text-[var(--text-sub)] text-xs flex items-center gap-1">
          © {new Date().getFullYear()} RANDRIANANDRASANA Alain Johny
        </p>
      </div>
    </footer>
  )
}
