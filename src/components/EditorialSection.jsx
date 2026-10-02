import editorialImage from '../assets/editorial/editorial-hat.webp'

export default function EditorialSection({ expanded, onToggle }) {
  return (
    <section className="editorial-section" id="editorial">
      <div className="editorial-section__copy">
        <p className="eyebrow">THE EDIT</p>

        <h2>
          Modern Icons
          <span>Last Longer</span>
        </h2>

        <div className="editorial-rule" />

        <p>
          More than accessories — modern heirlooms for a more intentional
          tomorrow.
        </p>

        <button
          className="editorial-button"
          type="button"
          aria-expanded={expanded}
          onClick={onToggle}
        >
          Discover the edit
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="editorial-section__image">
        <img
          src={editorialImage}
          alt="NOIR EDIT monochrome fashion portrait in a wide-brim hat"
          loading="lazy"
          decoding="async"
        />
      </div>

      <aside className="editorial-section__rail">
        <p>Style lives beyond trends</p>
        <div />
        <span>A more intentional tomorrow.</span>
      </aside>

      <div
        className={`editorial-drawer ${
          expanded ? 'is-open' : ''
        }`}
        aria-hidden={!expanded}
      >
        <button
          className="editorial-drawer__close"
          type="button"
          aria-label="Close editorial story"
          onClick={onToggle}
        >
          ×
        </button>

        <p className="eyebrow">NOIR EDIT / JOURNAL 01</p>

        <h3>The permanence of considered form.</h3>

        <p>
          The strongest objects do not depend on novelty. They remain relevant
          because proportion, material and construction were considered before
          spectacle.
        </p>

        <p>
          NOIR EDIT approaches each piece as a quiet object: useful, precise and
          designed to reveal its character over time.
        </p>
      </div>
    </section>
  )
}
