import { social } from '../data/content'
import { SocialIconColumn } from './Hero'

export default function Footer() {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-grid">
        <div className="contact-icons-col">
          <SocialIconColumn />
        </div>
        <div className="contact-main">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle">Bug free projects do exist. Say hi if you'd like to work with me.</p>

          <div className="contact-details">
            <a href={`mailto:${social.email}`}>{social.email}</a>
          </div>

          <p className="contact-location">{social.location}</p>
        </div>
        <img src="/illustration.png" alt="" className="contact-illustration" />
      </div>
    </footer>
  )
}