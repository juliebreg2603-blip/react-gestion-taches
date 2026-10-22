import { useState } from "react"

function TaskForm({ onAddTask, tasks }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [priority, setPriority] = useState("moyenne")
    const [error, setError] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        if (title.trim() === "") {
            setError("Le titre est obligatoire.")
            return
        }

        if (description.trim() === "") {
            setError("La description est obligatoire.")
            return
        }

        if (category.trim() === "") {
            setError("La catégorie est obligatoire.")
            return
        }

        const alreadyExists = tasks.some(
            (task) => task.title.trim().toLowerCase() === title.trim().toLowerCase()
        )

        if (alreadyExists) {
            setError("Cette tâche existe déjà.")
            return
        }

        setError("")

        const newTask = {
            title: title,
            description: description,
            category: category,
            priority: priority,
            done: false
        }

        onAddTask(newTask)

        setTitle("")
        setDescription("")
        setCategory("")
        setPriority("moyenne")
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>Ajouter une tâche</h2>

            <input
                type="text"
                className="field-wide"
                placeholder="Titre"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <textarea
                className="field-wide"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <input
                type="text"
                placeholder="Catégorie"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            />

            <select
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
            >
                <option value="basse">Basse</option>
                <option value="moyenne">Moyenne</option>
                <option value="haute">Haute</option>
            </select>

            {error && <p className="alert">{error}</p>}

            <button type="submit">Ajouter</button>
        </form>
    )
}

export default TaskForm
