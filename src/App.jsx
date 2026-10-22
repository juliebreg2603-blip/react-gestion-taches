import { useEffect, useState } from "react"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import { getTasks, createTask, deleteTaskById, updateTask } from "./api"
import "./App.css"
import Stats from "./components/Stats"
import FilterBar from "./components/FilterBar"
import SearchBar from "./components/SearchBar"

function App() {
    const [tasks, setTasks] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [priorityFilter, setPriorityFilter] = useState("all")
    const [loading, setLoading] = useState(true)
    const [loadError, setLoadError] = useState("")

    const filteredTasks = tasks.filter((task) => {
        const search = searchTerm.toLowerCase()

        const matchesSearch =
            task.title.toLowerCase().includes(search) ||
            task.description.toLowerCase().includes(search) ||
            task.category.toLowerCase().includes(search)

        const matchesStatus =
            statusFilter === "all" ||
            (statusFilter === "active" && task.done === false) ||
            (statusFilter === "done" && task.done === true)

        const matchesPriority =
            priorityFilter === "all" || task.priority === priorityFilter

        return matchesSearch && matchesStatus && matchesPriority
    })

    useEffect(() => {
        getTasks()
            .then((data) => {
                setTasks(data)
                setLoading(false)
            })
            .catch(() => {
                setLoadError("Impossible de charger les tâches. Vérifie que JSON Server est lancé.")
                setLoading(false)
            })
    }, [])

    function addTask(newTask) {
        createTask(newTask).then((createdTask) => {
            setTasks([...tasks, createdTask])
        })
    }

    function deleteTask(id) {
        deleteTaskById(id).then(() => {
            setTasks(tasks.filter((task) => task.id !== id))
        })
    }

    function toggleTask(task) {
        updateTask(task.id, { done: !task.done }).then((updatedTask) => {
            setTasks(
                tasks.map((currentTask) =>
                    currentTask.id === updatedTask.id ? updatedTask : currentTask
                )
            )
        })
    }

    function editTask(id, newTitle) {
        updateTask(id, { title: newTitle }).then((updatedTask) => {
            setTasks(
                tasks.map((currentTask) =>
                    currentTask.id === updatedTask.id ? updatedTask : currentTask
                )
            )
        })
    }

    return (
        <div className="app">
            <header className="app-header">
                <p className="app-tag">Panneau de contrôle</p>
                <h1>Gestionnaire de tâches avancé</h1>
                <div className="hazard"></div>
            </header>

            <Stats tasks={tasks} />

            <section className="toolbar">
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                <FilterBar
                    statusFilter={statusFilter}
                    onStatusChange={setStatusFilter}
                    priorityFilter={priorityFilter}
                    onPriorityChange={setPriorityFilter}
                />
            </section>

            <TaskForm onAddTask={addTask} tasks={tasks} />

            {loadError && <p className="alert">{loadError}</p>}

            {loading ? (
                <p className="loading">Chargement des tâches...</p>
            ) : (
                <TaskList
                    tasks={filteredTasks}
                    onDeleteTask={deleteTask}
                    onToggleTask={toggleTask}
                    onEditTask={editTask}
                />
            )}
        </div>
    )
}
export default App