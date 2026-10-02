import { useEffect, useRef, useState } from 'react'

export default function CustomSelect({
  value,
  options,
  onChange,
  ariaLabel,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef(null)
  const selectedOption =
    options.find((option) => option.value === value) ?? options[0]

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleSelect = (nextValue) => {
    onChange(nextValue)
    setIsOpen(false)
  }

  return (
    <div className="custom-select" ref={rootRef}>
      <button
        className="custom-select__trigger"
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{selectedOption.label}</span>

        <svg
          className={`custom-select__icon ${isOpen ? 'is-open' : ''}`}
          viewBox="0 0 12 8"
          aria-hidden="true"
        >
          <path
            d="M1 1.25 6 6.25 11 1.25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="custom-select__menu" role="listbox">
          {options.map((option) => (
            <button
              className={`custom-select__option ${
                option.value === value ? 'is-selected' : ''
              }`}
              type="button"
              role="option"
              aria-selected={option.value === value}
              key={option.value}
              onClick={() => handleSelect(option.value)}
            >
              <span>{option.label}</span>
              {option.value === value && (
                <span aria-hidden="true">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
