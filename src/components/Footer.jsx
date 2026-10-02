export default function Footer({ categories, onCategoryChange }) {
  const handleCategoryClick = (category) => {
    onCategoryChange(category)

    document
      .getElementById('collection')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div>
        <a className="brand brand--footer" href="#top">
          NOIR / EDIT
        </a>

        <p>
          Objects selected for their form,
          <br />
          restraint and quiet character.
        </p>
      </div>

      <div className="footer-navigation">
        <p>Collection</p>

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
      </div>

      <p className="copyright">
        © 2026 Andrii Dolzhenko. All Rights Reserved.
      </p>
    </footer>
  )
}
