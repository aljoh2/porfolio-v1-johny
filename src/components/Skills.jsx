import { motion } from 'framer-motion'
import { FaJs, FaDatabase, FaGitAlt, FaLinux, FaWindows, FaNetworkWired } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa6'
import { SiPostgresql, SiMysql, SiQgis, SiR, SiPhp, SiHtml5 } from 'react-icons/si'
import { useTranslation } from 'react-i18next'

const categories = [
  {
    key: 0,
    skills: [
      { name: 'Python', level: 85, icon: <FaPython /> },
      { name: 'MySQL / PostgreSQL / PostGIS', level: 80, icon: <SiPostgresql /> },
      { name: 'JS / HTML / CSS / PHP', level: 70, icon: <FaJs /> },
      { name: 'Notions en R', level: 55, icon: <SiR /> },
    ],
  },
  {
    key: 1,
    skills: [
      { name: 'QGIS / ArcGIS', level: 82, icon: <SiQgis /> },
      { name: 'Base de données spatiale', level: 78, icon: <FaDatabase /> },
      { name: 'Analyse géospatiale', level: 80, icon: <SiQgis /> },
      { name: 'Données environnementales', level: 78, icon: <FaDatabase /> },
    ],
  },
  {
    key: 2,
    skills: [
      { name: 'Linux', level: 72, icon: <FaLinux /> },
      { name: 'Windows', level: 80, icon: <FaWindows /> },
      { name: 'TCP/IP, VLAN, DHCP', level: 65, icon: <FaNetworkWired /> },
    ],
  },
]

const techIcons = [
  { icon: <FaPython />, label: 'Python' },
  { icon: <SiPostgresql />, label: 'PostgreSQL' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiQgis />, label: 'QGIS' },
  { icon: <SiR />, label: 'R' },
  { icon: <FaJs />, label: 'JavaScript' },
  { icon: <SiHtml5 />, label: 'HTML5' },
  { icon: <SiPhp />, label: 'PHP' },
  { icon: <FaLinux />, label: 'Linux' },
  { icon: <FaNetworkWired />, label: 'Réseaux' },
  { icon: <FaGitAlt />, label: 'Git' },
  { icon: <FaWindows />, label: 'Windows' },
]

export default function Skills() {
  const { t } = useTranslation()
  const cats = t('skills.cats', { returnObjects: true })

  return (
    <section id="skills" className="py-24 px-[6%] bg-[var(--bg-2)]">
      <motion.h2
        className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center text-[var(--text)] mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
      >
        {t('skills.title.0')} <span className="text-[var(--gold)]">{t('skills.title.1')}</span>
      </motion.h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-w-[1100px] mx-auto mb-12">
        {categories.map((cat, ci) => (
          <motion.div key={ci}
            className="shimmer bg-[var(--bg)] border border-[var(--gold-dim)] rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: ci * 0.15 }}
          >
            <h3 className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-5 pb-3 border-b border-[var(--gold-dim)]">
              {cats[cat.key]}
            </h3>
            {cat.skills.map((s, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
                    <span className="text-[var(--gold)]">{s.icon}</span>{s.name}
                  </span>
                  <span className="text-[var(--gold)] text-xs font-semibold">{s.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[var(--gold)] to-[#5ba3d9] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-[800px] mx-auto">
        {techIcons.map((tech, i) => (
          <motion.div key={i}
            className="shimmer flex flex-col items-center gap-1.5 bg-[var(--bg)] border border-[var(--gold-dim)] rounded-xl px-4 py-3 min-w-[70px] cursor-default hover:border-[var(--gold)] hover:shadow-[0_4px_20px_rgba(42,127,193,0.2)] transition-all duration-300"
            initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -5, scale: 1.1 }}
          >
            <span className="text-[1.8rem] text-[var(--gold)]">{tech.icon}</span>
            <span className="text-[var(--text-sub)] text-xs">{tech.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
