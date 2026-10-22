function Stats({ tasks }) {
    const totalTasks = tasks.length
    const doneTasks = tasks.filter((task) => task.done === true).length
    const activeTasks = tasks.filter((task) => task.done === false).length
    const highPriorityTasks = tasks.filter(
        (task) => task.priority === "haute"
    ).length

    return (
        <div className="stats">
            <div className="stat-card">
                <span className="stat-number">{totalTasks}</span>
                <span className="stat-label">Nombre total de tâches</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">{doneTasks}</span>
                <span className="stat-label">Tâches terminées</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">{activeTasks}</span>
                <span className="stat-label">Tâches en cours</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">{highPriorityTasks}</span>
                <span className="stat-label">Tâches priorité haute</span>
            </div>
        </div>
    )
}

export default Stats
