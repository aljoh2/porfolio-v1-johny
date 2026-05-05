import { motion } from 'framer-motion'
import { FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import profileImg from '../assets/images/my-photo-1.jpeg'

export default function About() {
  const { t } = useTranslation()
  const stats = [
    { icon: <FaBriefcase />, value: 'SIG',    label: t('about.stats.0') },
    { icon: <FaCode />,      value: 'Python', label: t('about.stats.1') },
    { icon: <FaGraduationCap />, value: 'Ing.', label: t('about.stats.2') },
  ]

  return (
    <section id="about" className="py-24 px-[6%] bg-[var(--bg-2)]">
      <motion.h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center text-[var(--text)] mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        {t('about.title_h2.0')} <span className="text-[var(--gold)]">{t('about.title_h2.1')}</span>
      </motion.h2>

      <div className="flex items-center gap-16 max-w-[1100px] mx-auto max-[900px]:flex-col max-[900px]:text-center">
        <motion.div className="relative flex-none" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <motion.img 
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            src={profileImg} 
            alt="Alain Johny" 
            className="w-[320px] h-[380px] object-cover object-top rounded-2xl relative z-10 cursor-pointer shadow-xl" />
          <div className="absolute top-4 left-4 w-full h-full border-2 border-[var(--gold)] rounded-2xl z-0" />
        </motion.div>

        <motion.div className="flex-1" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-[var(--gold)] text-xs tracking-[3px] uppercase mb-2">{t('about.tag')}</p>
          <h3 className="text-[1.8rem] font-bold text-[var(--text)] mb-4">{t('about.title')}</h3>
          <p className="text-[var(--text-muted)] leading-relaxed mb-3">{t('about.p1')}</p>
          <p className="text-[var(--text-muted)] leading-relaxed mb-6">{t('about.p2')}</p>

          <div className="flex gap-6 mb-8 flex-wrap max-[900px]:justify-center">
            {stats.map((s, i) => (
              <div key={i} className="shimmer flex flex-col items-center gap-1 bg-[var(--bg)] px-5 py-4 rounded-xl border border-[var(--gold-dim)] min-w-[90px]">
                <span className="text-[var(--gold)] text-xl">{s.icon}</span>
                <span className="text-[var(--text)] text-lg font-bold">{s.value}</span>
                <span className="text-[var(--text-sub)] text-xs text-center">{s.label}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="inline-block px-8 py-3 bg-[var(--gold)] text-white rounded-full font-bold hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(42,127,193,0.4)] transition-all duration-300">
            {t('about.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
