import { useState } from 'react'

export default function Header({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToCollection = () => {
    document
      .getElementById('collection')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToEditorial = () => {
    document
      .getElementById('editorial')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCategoryClick = (category) => {
    onCategoryChange(category)
    setIsMenuOpen(false)
    scrollToCollection()
  }

  const handleEditorialClick = () => {
    setIsMenuOpen(false)
    scrollToEditorial()
  }

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="NOIR EDIT home">
        NOIR EDIT
      </a>

      <nav className="desktop-navigation" aria-label="Primary navigation">
        {categories
          .filter((category) => category !== 'All')
          .map((category) => (
            <button
              className={activeCategory === category ? 'is-active' : ''}
              key={category}
              onClick={() => handleCategoryClick(category)}
              type="button"
            >
              {category}
            </button>
          ))}

        <button onClick={handleEditorialClick} type="button">
          Editorial
        </button>
      </nav>

      <button
        className={`menu-button ${isMenuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <div
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          {categories
            .filter((category) => category !== 'All')
            .map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                type="button"
              >
                {category}
              </button>
            ))}

          <button onClick={handleEditorialClick} type="button">
            Editorial
          </button>
        </nav>

        <p>Objects of Quiet Character.</p>
      </div>
    </header>
  )
}
