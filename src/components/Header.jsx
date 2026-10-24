import { social } from '../data/content'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <nav className="header-nav">
          <a href={social.resume} target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="#skills">Skills</a>
          <a href="#work">Projects</a>
          <a href="#writing">Articles</a>
          <a href="#contact">Contact Me</a>
          <a href={`mailto:${social.email}`}>Email</a>
        </nav>
      </div>
    </header>
  )
}
