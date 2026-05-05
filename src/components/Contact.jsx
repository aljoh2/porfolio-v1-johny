import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'


const EMAILJS_SERVICE_ID  = 'service_pc3l8mo'
const EMAILJS_TEMPLATE_ID = 'template_j5vt9rm'
const EMAILJS_AUTO_REPLY  = 'template_bq3n6gb'
const EMAILJS_PUBLIC_KEY  = 'Wsv5cNhyfyXAssmSS'

// Initialisation globale d'EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

const contactIcons  = [<FaEnvelope />, <FaPhone />, <FaMapMarkerAlt />]
const contactValues = ['alainjohnyrr@gmail.com', '+261 34 84 851 84', 'Antananarivo, MADAGASCAR']
const contactHrefs  = ['mailto:alainjohnyrr@gmail.com', 'tel:+261348485184', '#']

export default function Contact() {
  const { t } = useTranslation()
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | loading | success | error

  const labels       = Array.isArray(t('contact.labels', { returnObjects: true })) ? t('contact.labels', { returnObjects: true }) : []
  const placeholders = Array.isArray(t('contact.placeholders', { returnObjects: true })) ? t('contact.placeholders', { returnObjects: true }) : []

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')

    const templateParams = {
      from_name: form.name.trim(),
      from_email: form.email.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
      to_email: 'alainjohnyrr@gmail.com',
      reply_to: form.email.trim(),
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)

      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTO_REPLY, {
          from_name: templateParams.from_name,
          from_email: templateParams.from_email,
          email: templateParams.from_email,
          message: templateParams.message,
          subject: templateParams.subject,
        })
      } catch (replyErr) {
        console.warn('Auto-reply failed:', replyErr)
      }

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const btnLabel = {
    idle:    t('contact.send'),
    loading: '⏳ Envoi...',
    success: t('contact.sent'),
    error:   '❌ Erreur, réessayez',
  }[status]

  const btnClass = {
    idle:    'bg-[var(--gold)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(42,127,193,0.4)]',
    loading: 'bg-[var(--gold)] opacity-70 cursor-not-allowed',
    success: 'bg-green-500',
    error:   'bg-red-500',
  }[status]

  return (
    <section id="contact" className="py-24 px-[6%] bg-[var(--bg-2)]">
      <motion.h2
        className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center text-[var(--text)] mb-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}>
        {t('contact.title.0')} <span className="text-[var(--gold)]">{t('contact.title.1')}</span>
      </motion.h2>

      <div className="flex gap-16 max-w-[1000px] mx-auto max-[768px]:flex-col max-[768px]:gap-8">

        {/* Infos */}
        <motion.div className="flex-1"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h3 className="text-[var(--text)] text-2xl font-bold mb-3">{t('contact.subtitle')}</h3>
          <p className="text-[var(--text-muted)] leading-relaxed mb-6">{t('contact.desc')}</p>
          {labels.map((label, i) => (
            <div key={i} className="flex items-center gap-4 mb-5">
              <div className="w-11 h-11 bg-[rgba(42,127,193,0.1)] border border-[var(--gold-dim)] rounded-xl flex items-center justify-center text-[var(--gold)] flex-shrink-0">
                {contactIcons[i]}
              </div>
              <div>
                <p className="text-[var(--text-sub)] text-xs m-0">{label}</p>
                <a href={contactHrefs[i]} className="text-[var(--text-muted)] text-sm hover:text-[var(--gold)] transition-colors">
                  {contactValues[i]}
                </a>
              </div>
            </div>
          ))}

          {/* Feedback messages */}
          {status === 'success' && (
            <div className="flex items-center gap-2 text-green-400 text-sm mt-4">
              <FaCheckCircle /> Message envoyé avec succès !
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm mt-4">
              <FaExclamationCircle /> Échec de l'envoi. Vérifiez votre connexion.
            </div>
          )}
        </motion.div>

        {/* Formulaire */}
        <motion.form
          ref={formRef}
          className="flex-1 flex flex-col gap-4"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>

          <input
            type="text"
            name="from_name"
            placeholder={placeholders[0]}
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="bg-[var(--bg)] border border-[var(--gold-dim)] rounded-xl px-5 py-3 text-[var(--text)] text-sm outline-none focus:border-[var(--gold)] transition-colors placeholder:text-[var(--text-sub)]"
          />
          <input
            type="email"
            name="from_email"
            placeholder={placeholders[1]}
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="bg-[var(--bg)] border border-[var(--gold-dim)] rounded-xl px-5 py-3 text-[var(--text)] text-sm outline-none focus:border-[var(--gold)] transition-colors placeholder:text-[var(--text-sub)]"
          />
          <input
            type="text"
            name="subject"
            placeholder={placeholders[3] || 'Objet'}
            required
            value={form.subject}
            onChange={e => setForm({ ...form, subject: e.target.value })}
            className="bg-[var(--bg)] border border-[var(--gold-dim)] rounded-xl px-5 py-3 text-[var(--text)] text-sm outline-none focus:border-[var(--gold)] transition-colors placeholder:text-[var(--text-sub)]"
          />
          <textarea
            name="message"
            rows={5}
            placeholder={placeholders[3]}
            required
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className="bg-[var(--bg)] border border-[var(--gold-dim)] rounded-xl px-5 py-3 text-[var(--text)] text-sm outline-none focus:border-[var(--gold)] transition-colors placeholder:text-[var(--text-sub)] resize-none"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`px-8 py-3 text-white rounded-full font-bold transition-all duration-300 cursor-pointer ${btnClass}`}>
            {btnLabel}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
