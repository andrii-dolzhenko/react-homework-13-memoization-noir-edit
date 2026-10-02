import CustomSelect from './CustomSelect'

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'name', label: 'Name' },
  { value: 'price-low', label: 'Price — low to high' },
  { value: 'price-high', label: 'Price — high to low' },
]

export default function CollectionToolbar({
  query,
  onQueryChange,
  category,
  categories,
  onCategoryChange,
  sortBy,
  onSortChange,
  inStockOnly,
  onInStockChange,
  onReset,
}) {
  return (
    <div className="collection-toolbar">
      <label className="toolbar-search">
        <span className="toolbar-control__label">Search</span>

        <span className="toolbar-search__field">
          <span aria-hidden="true">⌕</span>

          <input
            id="collection-search"
            name="collection-search"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search the edit"
          />
        </span>
      </label>

      <div className="category-tabs" aria-label="Product categories">
        {categories.map((item) => (
          <button
            className={category === item ? 'is-active' : ''}
            key={item}
            onClick={() => onCategoryChange(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="toolbar-control toolbar-sort">
        <span className="toolbar-control__label">Sort by</span>

        <CustomSelect
          value={sortBy}
          options={sortOptions}
          onChange={onSortChange}
          ariaLabel="Sort products"
        />
      </div>

      <label className="toolbar-control toolbar-stock">
        <span className="toolbar-control__label">Availability</span>

        <span className="toolbar-stock__field">
          <input
            id="in-stock-only"
            name="in-stock-only"
            checked={inStockOnly}
            onChange={(event) => onInStockChange(event.target.checked)}
            type="checkbox"
          />
          <span>In stock only</span>
        </span>
      </label>

      <button className="toolbar-reset" onClick={onReset} type="button">
        <span>Reset</span>
        <span aria-hidden="true">↺</span>
      </button>
    </div>
  )
}
