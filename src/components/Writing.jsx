import { writing, social } from '../data/content'

export default function Writing() {
  return (
    <section id="writing" className="writing-section">
      <div className="container">
        <h2 className="section-title-serif">Articles</h2>
        <div className="article-list">
          {writing.map((post) => (
            <div key={post.title} className="article-card article-card-stacked">
              <a href={post.url} target="_blank" rel="noreferrer" className="article-image-wrap">
                <img src={post.image} alt={post.title} className="article-image" />
              </a>
              <div className="article-content">
                <div className="article-byline">
                  <span className="article-avatar">S</span>
                  <span>esha Stephanie</span>
                </div>
                <a href={post.url} target="_blank" rel="noreferrer" className="article-title">{post.title}</a>
                <p className="article-desc">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a href={social.medium} target="_blank" rel="noreferrer" className="view-more-button">View More</a>
      </div>
    </section>
  )
}
