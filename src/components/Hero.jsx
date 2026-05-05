import { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import { TypeAnimation } from 'react-type-animation'
import profileDark from '../assets/images/My-photo-default.png'
import profileLight from '../assets/images/My-photo-default-light.png'

export default function Hero() {
  const [ready, setReady] = useState(false)
  const { t } = useTranslation()
  const { dark } = useTheme()
  const profileImg = dark ? profileDark : profileLight
  const particlesLoaded = useCallback(async () => {}, [])

  useEffect(() => {
    initParticlesEngine(async e => { await loadSlim(e) }).then(() => setReady(true))
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg)]">
      {ready && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={{
        background: { color: { value: 'transparent' } }, fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: ['#2a7fc1', '#14263B', '#5ba3d9', '#ffffff'] },
          links: { enable: true, color: '#2a7fc1', opacity: 0.2, distance: 150 },
          move: { enable: true, speed: 1.2 }, opacity: { value: 0.5 }, size: { value: { min: 1, max: 3 } },
        },
        interactivity: { events: { onHover: { enable: true, mode: 'repulse' }, onClick: { enable: true, mode: 'push' } }, modes: { repulse: { distance: 100 }, push: { quantity: 4 } } },
        detectRetina: true,
      }} className="absolute inset-0 z-0" />}

      <div className="relative z-10 flex items-center justify-between w-full max-w-[1200px] mx-auto px-[6%] gap-12 max-[900px]:flex-col-reverse max-[900px]:text-center max-[900px]:pt-24">
        <motion.div className="flex-1" initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-[var(--gold)] text-xs font-medium tracking-[3px] uppercase mb-2">{t('hero.greeting')}</p>

          <h1 className="text-[clamp(1.6rem,4vw,4rem)] font-extrabold text-[var(--text)] leading-tight mb-2">
            Alain Johny{' '}
            <br className="hidden max-[900px]:block" />
            <span className="text-[var(--gold)] text-[clamp(1.3rem,3.5vw,4rem)]">RANDRIANANDRASANA</span>
          </h1>

          <TypeAnimation
            sequence={[
              'Ingénieur en Informatique | Support IT', 4000,
              'Spécialiste SIG', 4000,
              'Développeur Web & Consultant SIG', 4000,
            ]}
            wrapper="h2"
            speed={20}
            repeat={Infinity}
            className="text-[clamp(0.85rem,2vw,1.5rem)] text-[var(--text-muted)] font-normal mb-5 border-r-2 border-[var(--gold)] w-fit max-[900px]:mx-auto"
          />

          <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-[480px] mb-8 max-[900px]:mx-auto">{t('hero.bio')}</p>

          <div className="flex gap-4 flex-wrap mb-8 max-[900px]:justify-center">
            <a href="#contact" className="px-8 py-3 bg-[var(--gold)] text-white rounded-full font-bold hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(42,127,193,0.4)] transition-all duration-300">{t('hero.hire')}</a>
            <a href="#" className="px-8 py-3 border-2 border-[var(--gold)] text-[var(--gold)] rounded-full font-semibold flex items-center gap-2 hover:bg-[var(--gold)] hover:text-white transition-all duration-300"><HiDownload />{t('hero.cv')}</a>
          </div>

          <div className="flex gap-4 max-[900px]:justify-center">
            {[
              { href: 'https://github.com/aljoh2', icon: <FaGithub /> },
              { href: 'https://www.linkedin.com/in/johny-alain-randrianandrasana-27b6aa1a3/', icon: <FaLinkedin /> },
              { href: 'https://wa.me/261348485184', icon: <FaWhatsapp /> },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                className="w-10 h-10 border-2 border-[var(--gold-dim)] rounded-full flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white hover:-translate-y-1 transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div className="flex-none flex justify-center" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="relative w-[340px] h-[400px] max-[900px]:w-[260px] max-[900px]:h-[300px]">
            <motion.img 
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={profileImg} 
              alt="Alain Johny" 
              className="w-full h-full object-cover object-top rounded-3xl relative z-10 shadow-[0_20px_60px_rgba(20,38,59,0.5)] cursor-pointer" />
            <div className="absolute -top-2 -left-2 right-2 bottom-2 border-2 border-[var(--gold)] rounded-[28px] z-0 opacity-50" />
            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[var(--gold)] rounded-2xl z-0 opacity-10" />
            {/* Badge expérience */}
            <div className="shimmer absolute bottom-5 -right-5 z-20 rounded-xl px-3 py-2.5 flex items-center gap-2 shadow-xl"
              style={{ background: 'linear-gradient(135deg, rgba(11,26,43,0.95) 0%, rgba(20,38,59,0.98) 100%)', border: '1px solid rgba(42,127,193,0.35)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-extrabold text-base"
                style={{ background: 'linear-gradient(135deg, #2a7fc1 0%, #f0a500 100%)' }}>4</div>
              <div>
                <p className="text-xs font-bold m-0" style={{ background: 'linear-gradient(90deg, #2a7fc1, #f0a500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ans d'expérience</p>
                <p className="text-[0.7rem] m-0" style={{ color: 'rgba(255,255,255,0.5)' }}>Informatique & SIG</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
