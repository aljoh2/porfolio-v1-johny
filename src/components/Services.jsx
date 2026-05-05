import { motion } from 'framer-motion'
import { FaDatabase, FaMapMarkedAlt, FaChartLine, FaWater, FaCloudRain, FaLeaf } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const icons = [<FaDatabase />, <FaMapMarkedAlt />, <FaChartLine />, <FaWater />, <FaCloudRain />, <FaLeaf />]

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true })
  const descs = t('services.descs', { returnObjects: true })

  return (
    <section id="services" className="py-24 px-[6%] bg-[var(--bg)]">
      <motion.h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center text-[var(--text)] mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        {t('services.title.0')} <span className="text-[var(--gold)]">{t('services.title.1')}</span>
      </motion.h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7 max-w-[1100px] mx-auto">
        {items.map((title, i) => (
          <motion.div key={i} className="relative overflow-hidden bg-[var(--bg-2)] border border-[var(--gold-dim)] rounded-2xl p-8 hover:border-[var(--gold)] hover:shadow-[0_8px_30px_rgba(42,127,193,0.15)] transition-all duration-300 cursor-default group"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -8 }}>
            
            {/* Shimmer Effect */}
            <motion.div 
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.05)] to-transparent -skew-x-12"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: i * 0.2 }}
            />

            <div className="w-14 h-14 bg-[rgba(42,127,193,0.1)] rounded-xl flex items-center justify-center text-2xl text-[var(--gold)] mb-5">{icons[i]}</div>
            <h3 className="text-[var(--text)] text-lg font-semibold mb-3">{title}</h3>
            <p className="text-[var(--text-sub)] text-sm leading-relaxed">{descs[i]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
