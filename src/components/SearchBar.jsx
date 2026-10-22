function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <input
            type="text"
            className="search-input"
            placeholder="Rechercher une tâche"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
        />
    )
}

export default SearchBar
