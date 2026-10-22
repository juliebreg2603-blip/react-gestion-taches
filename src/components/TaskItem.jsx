import { useState } from "react"

function TaskItem({ task, onDeleteTask, onToggleTask, onEditTask }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedTitle, setEditedTitle] = useState(task.title)

    function handleSave() {
        onEditTask(task.id, editedTitle)
        setIsEditing(false)
    }

    return (
        <li className={`task priority-${task.priority} ${task.done ? "done" : ""}`}>
            <div className="task-main">
                <input
                    type="checkbox"
                    className="task-check"
                    checked={task.done}
                    onChange={() => onToggleTask(task)}
                />

                <div className="task-body">
                    {isEditing ? (
                        <div className="edit-row">
                            <input
                                type="text"
                                value={editedTitle}
                                onChange={(event) => setEditedTitle(event.target.value)}
                            />
                            <button onClick={handleSave}>Enregistrer</button>
                        </div>
                    ) : (
                        <h2
                            className="task-title"
                            style={{
                                textDecoration: task.done ? "line-through" : "none"
                            }}
                        >
                            {task.title}
                        </h2>
                    )}

                    <p className="task-description">{task.description}</p>
                </div>
            </div>

            <div className="task-meta">
                <span className="badge badge-priority">Priorité : {task.priority}</span>
                <span className="badge">Catégorie : {task.category}</span>
                <span className="badge badge-status">
                    Statut : {task.done ? "Terminée" : "En cours"}
                </span>
            </div>

            <div className="task-actions">
                <button className="btn-ghost" onClick={() => setIsEditing(true)}>
                    Modifier
                </button>
                <button className="btn-danger" onClick={() => onDeleteTask(task.id)}>
                    Supprimer
                </button>
            </div>
        </li>
    )
}

export default TaskItem
