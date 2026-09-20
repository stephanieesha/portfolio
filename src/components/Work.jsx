import { useState, useEffect, useCallback } from 'react'
import { FaGithub, FaLink, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { manualTestingTemplates, automationApps } from '../data/content'

const TABS = ['Manual Testing', 'Automation & Apps']

export default function Work() {
  const [activeTab, setActiveTab] = useState('Automation & Apps')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Only items with a real image can be enlarged - the manual testing
  // cards without a screenshot link out instead, so they're excluded
  // from the lightbox's navigable list.
  const lightboxItems = activeTab === 'Manual Testing'
    ? manualTestingTemplates.filter((t) => t.image)
    : automationApps

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + lightboxItems.length) % lightboxItems.length),
    [lightboxItems.length]
  )
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i + 1) % lightboxItems.length),
    [lightboxItems.length]
  )

  useEffect(() => {
    if (lightboxIndex === null) return
    function handleKey(e) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, closeLightbox, showPrev, showNext])

  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title-serif">Projects</h2>
        <p className="section-intro-light">
          A display of the projects I've worked on to develop my skills, lead quality
          strategy, or solve a real problem.
        </p>

        <div className="tab-bar">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Manual Testing' ? (
          <div className="project-grid">
            {manualTestingTemplates.map((t) => {
              const lightboxPos = lightboxItems.findIndex((item) => item.name === t.name)
              return (
                <div key={t.name} className="project-card">
                  <div
                    className={`project-image-frame ${t.image ? 'project-image-clickable' : ''}`}
                    onClick={t.image ? () => setLightboxIndex(lightboxPos) : undefined}
                  >
                    {t.image ? (
                      <img src={t.image} alt={t.name} className="project-image" />
                    ) : (
                      <div className="project-image-placeholder">Open sheet</div>
                    )}
                  </div>
                  <div className="project-title-row">
                    <a href={t.url} target="_blank" rel="noreferrer" className="project-title-link">
                      <h3 className="project-title">{t.name}</h3>
                    </a>
                    <a href={t.url} target="_blank" rel="noreferrer"><FaLink className="project-icon" /></a>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="project-grid">
            {automationApps.map((p, i) => (
              <div key={p.name} className="project-card">
                <div className="project-image-frame project-image-clickable" onClick={() => setLightboxIndex(i)}>
                  <img src={p.image} alt={p.name} className="project-image" />
                </div>
                <div className="project-title-row">
                  <h3 className="project-title">{p.name}</h3>
                  <div className="project-title-icons">
                    <a href={p.link} target="_blank" rel="noreferrer"><FaLink className="project-icon" /></a>
                    <a href={p.link} target="_blank" rel="noreferrer"><FaGithub className="project-icon" /></a>
                  </div>
                </div>
                <p className="project-desc">{p.description}</p>
                {p.leadership && <p className="project-leadership">{p.leadership}</p>}
                <div className="stack-pill-row">
                  {p.stack.map((s) => <span key={s} className="stack-pill">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && lightboxItems[lightboxIndex] && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <FaTimes />
          </button>
          {lightboxItems.length > 1 && (
            <button
              className="lightbox-arrow lightbox-arrow-left"
              onClick={(e) => { e.stopPropagation(); showPrev() }}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
          )}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxItems[lightboxIndex].image} alt={lightboxItems[lightboxIndex].name} className="lightbox-image" />
            <p className="lightbox-caption">{lightboxItems[lightboxIndex].name}</p>
          </div>
          {lightboxItems.length > 1 && (
            <button
              className="lightbox-arrow lightbox-arrow-right"
              onClick={(e) => { e.stopPropagation(); showNext() }}
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      )}
    </section>
  )
}
