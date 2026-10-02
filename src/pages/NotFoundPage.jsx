import { Link, useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()
  const artwork = `${import.meta.env.BASE_URL}not-found-pearls.webp`

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }

    navigate('/')
  }

  return (
    <main className="not-found-page">
      <header className="not-found-header">
        <Link className="brand" to="/">
          NOIR EDIT
        </Link>

        <nav aria-label="404 navigation">
          <Link to="/" state={{ scrollTo: 'collection' }}>
            Bags
          </Link>
          <Link to="/" state={{ scrollTo: 'collection' }}>
            Eyewear
          </Link>
          <Link to="/" state={{ scrollTo: 'collection' }}>
            Watches
          </Link>
          <Link to="/" state={{ scrollTo: 'collection' }}>
            Footwear
          </Link>
        </nav>
      </header>

      <section className="not-found-content">
        <img
          className="not-found-artwork"
          src={artwork}
          alt="404 surrounded by a broken pearl necklace"
          fetchPriority="high"
          decoding="sync"
        />

        <h1>
          <span>The page you are looking for does not exist</span>
          <span>or has been moved.</span>
        </h1>

        <div className="not-found-actions">
          <Link className="not-found-primary" to="/">
            Return home
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            className="not-found-secondary"
            to="/"
            state={{ scrollTo: 'collection' }}
          >
            Continue shopping
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <button
          className="not-found-back"
          type="button"
          onClick={handleBack}
        >
          Back to previous page
        </button>
      </section>
    </main>
  )
}
