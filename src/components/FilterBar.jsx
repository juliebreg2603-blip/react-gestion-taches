function FilterBar({
    statusFilter,
    onStatusChange,
    priorityFilter,
    onPriorityChange
}) {
    return (
        <div className="filter-bar">
            <button
                onClick={() => onStatusChange("all")}
                disabled={statusFilter === "all"}
            >
                Toutes
            </button>
            <button
                onClick={() => onStatusChange("active")}
                disabled={statusFilter === "active"}
            >
                En cours
            </button>
            <button
                onClick={() => onStatusChange("done")}
                disabled={statusFilter === "done"}
            >
                Terminées
            </button>

            <select
                value={priorityFilter}
                onChange={(event) => onPriorityChange(event.target.value)}
            >
                <option value="all">Toutes les priorités</option>
                <option value="basse">Basse</option>
                <option value="moyenne">Moyenne</option>
                <option value="haute">Haute</option>
            </select>
        </div>
    )
}

export default FilterBar
