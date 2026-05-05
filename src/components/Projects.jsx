import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaShoppingCart, FaTasks, FaUserCircle, FaCloudSun } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const icons = [<FaShoppingCart />, <FaTasks />, <FaUserCircle />, <FaCloudSun />]
const colors = ['#2a7fc1', '#14263B', '#5ba3d9', '#2a7fc1']
const tags = [['React','Node.js','MongoDB'], ['React','Socket.io','Express'], ['React','Framer Motion','CSS'], ['React','Chart.js','API']]

export default function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true })

  return (
    <section id="projects" className="py-24 px-[6%] bg-[var(--bg)]">
      <motion.h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center text-[var(--text)] mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        {t('projects.title.0')} <span className="text-[var(--gold)]">{t('projects.title.1')}</span>
      </motion.h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7 max-w-[1100px] mx-auto">
        {items.map((p, i) => (
          <motion.div key={i} className="bg-[var(--bg-2)] border border-[var(--gold-dim)] rounded-2xl overflow-hidden hover:border-[var(--gold)] hover:shadow-[0_10px_35px_rgba(42,127,193,0.15)] transition-all duration-300"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6 }}>
            <div className="h-28 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${colors[i]}22, ${colors[i]}08)` }}>
              <span className="text-5xl opacity-80" style={{ color: colors[i], filter: `drop-shadow(0 0 12px ${colors[i]})` }}>{icons[i]}</span>
            </div>
            <div className="p-6">
              <h3 className="text-[var(--text)] text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-[var(--text-sub)] text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags[i].map(tag => (
                  <span key={tag} className="bg-[rgba(42,127,193,0.1)] text-[var(--gold)] border border-[var(--gold-dim)] px-3 py-0.5 rounded-full text-xs">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-1.5 text-[var(--text-sub)] text-sm hover:text-[var(--gold)] transition-colors"><FaGithub />{t('projects.code')}</a>
                <a href="#" className="flex items-center gap-1.5 text-[var(--text-sub)] text-sm hover:text-[var(--gold)] transition-colors"><FaExternalLinkAlt />{t('projects.live')}</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
