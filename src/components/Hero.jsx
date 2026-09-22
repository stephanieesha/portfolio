import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter, FaMedium } from 'react-icons/fa6'
import { social } from '../data/content'

export function SocialIconColumn() {
  return (
    <div className="social-icon-column">
      <a href={social.github} target="_blank" rel="noreferrer" className="social-icon social-icon-dark"><FaGithub /></a>
      <a href={social.linkedin} target="_blank" rel="noreferrer" className="social-icon social-icon-light"><FaLinkedin /></a>
      <a href={social.youtube} target="_blank" rel="noreferrer" className="social-icon social-icon-red"><FaYoutube /></a>
      <a href={social.twitter} target="_blank" rel="noreferrer" className="social-icon social-icon-dark"><FaXTwitter /></a>
      <a href={social.medium} target="_blank" rel="noreferrer" className="social-icon social-icon-dark"><FaMedium /></a>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-left">
          <img src="/illustration.png" alt="" className="hero-illustration" />
          <SocialIconColumn />
        </div>

        <div className="hero-center">
          <h1 className="hero-headline">Hello, I'm Stephanie.</h1>
          <p className="hero-subheadline">Senior QA Lead</p>
          <p className="hero-body">
            I lead QA strategy, build automation frameworks, leverage AI-powered
            testing practices, and ship software that solve real world problems.
          </p>
        </div>

        <div className="hero-right">
          <img src="/photo.jpg" alt="Stephanie Ayuba" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}
