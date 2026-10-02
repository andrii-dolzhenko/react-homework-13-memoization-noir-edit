import heroImage from '../assets/hero/hero-main.webp'

export default function Hero() {
  const scrollToCollection = () => {
    document
      .getElementById('collection')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="top">
      <img
        className="hero__image"
        src={heroImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
      />

      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="eyebrow">A MORE REFINED WARDROBE</p>

        <h1>
          Objects of
          <span>Quiet Character</span>
        </h1>

        <div className="hero__rule" />

        <p className="hero__description">
          Timeless pieces for a more intentional life. Luxury accessories
          defined by form, feeling and lasting presence.
        </p>

        <button
          className="primary-link"
          type="button"
          onClick={scrollToCollection}
        >
          Explore the collection
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  )
}
