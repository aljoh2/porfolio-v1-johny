import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const education = [
  { degree: 'Master en SIGD', school: "Ecole de Management et d'Innovation Technologique", location: 'Fianarantsoa', year: '2024' },
  { degree: 'Licence en Informatique', school: "Ecole de Management et d'Innovation Technologique", location: 'Fianarantsoa', year: '2020' },
  { degree: 'Baccalauréat', school: 'LPCSVP', location: 'Farafangana', year: '2016' },
]

const experiences = [
  {
    role: 'Ingénieur Support IT', company: 'BASMAK Technologies', location: 'Antananarivo', period: 'Depuis 2025',
    tasks: ['Gestion des incidents niveau 2 (analyse, résolution, escalade)', "Analyse de données issues des systèmes IT", 'Rédaction de documentation technique', 'Suivi et reporting des incidents', "Utilisation d'outils d'analyse et de bases de données"],
  },
  {
    role: 'Consultant SIG', company: 'INGEDATA', location: 'Antananarivo', period: '2025',
    tasks: ['Analyse et traitement de données géographiques', 'Utilisation des outils SIG', 'Production de cartes et analyse spatiale', 'Contribution à des projets liés aux données territoriales'],
  },
  {
    role: 'Responsable SIG & Projet IT', company: 'ECOTRAM', location: 'Fianarantsoa', period: '2023 – 2024',
    tasks: ['Gestion de projets SIG', 'Analyse de données et reporting', "Coordination d'équipes techniques"],
  },
  {
    role: 'Développeur Web & Consultant SIG', company: 'CAMSON GROUP', location: 'Fianarantsoa', period: '2022',
    tasks: ["Développement d'applications web (Symfony, MySQL)", 'Analyse des zones vulnérables aux inondations (SIG)', 'Cartographie et traitement de données environnementales', 'Appui à la prise de décision via analyse spatiale'],
  },
]

const TimelineItem = ({ children, fromLeft, delay }) => (
  <motion.div className="relative pl-6 mb-6"
    initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}>
    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[var(--gold)] shadow-[0_0_8px_rgba(42,127,193,0.6)]" />
    {children}
  </motion.div>
)

export default function Education() {
  const { t } = useTranslation()

  return (
    <section id="education" className="py-24 px-[6%] bg-[var(--bg-2)]">
      <motion.h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center text-[var(--text)] mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        {t('education.title.0')} <span className="text-[var(--gold)]">{t('education.title.1')}</span>
      </motion.h2>

      <div className="grid grid-cols-2 gap-12 max-w-[1100px] mx-auto max-[768px]:grid-cols-1 max-[768px]:gap-8">
        {/* Formation */}
        <div>
          <h3 className="flex items-center gap-2 text-[var(--gold)] text-sm font-bold uppercase tracking-widest mb-6 pb-3 border-b border-[var(--gold-dim)]">
            <FaGraduationCap /> {t('education.formation')}
          </h3>
          <div className="relative pl-2 border-l-2 border-l-[linear-gradient(to_bottom,var(--gold),transparent)]" style={{ borderImage: 'linear-gradient(to bottom, var(--gold), transparent) 1' }}>
            {education.map((e, i) => (
              <TimelineItem key={i} fromLeft delay={i * 0.15}>
                <div className="bg-[var(--bg)] border border-[var(--gold-dim)] rounded-xl p-4 hover:border-[var(--gold)] transition-colors">
                  <span className="flex items-center gap-1.5 text-[var(--gold)] text-xs font-semibold mb-1"><FaCalendarAlt />{e.year}</span>
                  <h4 className="text-[var(--text)] font-semibold text-sm mb-1">{e.degree}</h4>
                  <p className="text-[var(--text-muted)] text-xs mb-1">{e.school}</p>
                  <p className="flex items-center gap-1 text-[var(--text-sub)] text-xs"><FaMapMarkerAlt />{e.location}</p>
                </div>
              </TimelineItem>
            ))}
          </div>
        </div>

        {/* Expériences */}
        <div>
          <h3 className="flex items-center gap-2 text-[var(--gold)] text-sm font-bold uppercase tracking-widest mb-6 pb-3 border-b border-[var(--gold-dim)]">
            <FaBriefcase /> {t('education.experience')}
          </h3>
          <div className="relative pl-2" style={{ borderLeft: '2px solid', borderImage: 'linear-gradient(to bottom, var(--gold), transparent) 1' }}>
            {experiences.map((exp, i) => (
              <TimelineItem key={i} fromLeft={false} delay={i * 0.15}>
                <div className="bg-[var(--bg)] border border-[var(--gold-dim)] rounded-xl p-4 hover:border-[var(--gold)] transition-colors">
                  <span className="flex items-center gap-1.5 text-[var(--gold)] text-xs font-semibold mb-1"><FaCalendarAlt />{exp.period}</span>
                  <h4 className="text-[var(--text)] font-semibold text-sm mb-1">{exp.role}</h4>
                  <p className="text-[var(--text-muted)] text-xs mb-1">{exp.company}</p>
                  <p className="flex items-center gap-1 text-[var(--text-sub)] text-xs mb-2"><FaMapMarkerAlt />{exp.location}</p>
                  <ul className="space-y-1">
                    {exp.tasks.map((task, j) => (
                      <li key={j} className="text-[var(--text-sub)] text-xs pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--gold)]">{task}</li>
                    ))}
                  </ul>
                </div>
              </TimelineItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
