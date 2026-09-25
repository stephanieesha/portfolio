import { SiCypress, SiSelenium, SiPython, SiTypescript, SiJavascript, SiReact } from 'react-icons/si'
import {
  FaClipboardList, FaChalkboardTeacher, FaSyncAlt, FaVial, FaTheaterMasks,
  FaClipboardCheck, FaCheckDouble, FaUniversalAccess, FaTachometerAlt,
  FaExchangeAlt, FaShieldAlt, FaLayerGroup, FaTasks,
} from 'react-icons/fa'
import { skillGroups } from '../data/content'

const ICONS = {
  'Playwright': FaTheaterMasks,
  'Cypress': SiCypress,
  'Selenium': SiSelenium,
  'API Testing': FaVial,
  'Python': SiPython,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'React': SiReact,
  'SQL': FaDatabase,
  'DAM Migration': FaExchangeAlt,
  'Security Testing': FaShieldAlt,
  'Adobe Experience Manager': FaLayerGroup,
  'Test Management': FaTasks,
  'Test Strategy': FaClipboardList,
  'Mentoring': FaChalkboardTeacher,
  'Agile / Scrum (PSM I)': FaSyncAlt,
  'Manual Testing': FaClipboardCheck,
  'Functional Testing': FaCheckDouble,
  'Accessibility Testing': FaUniversalAccess,
  'Performance Testing': FaTachometerAlt,
}

const flatSkills = skillGroups.flatMap((g) => g.items)

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title-serif">Skills</h2>
        <div className="skills-pill-grid">
          {flatSkills.map((item) => {
            const Icon = ICONS[item]
            return (
              <div key={item} className="skill-pill">
                {Icon && <span className="skill-pill-icon-circle"><Icon /></span>}
                <span>{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
