import TaskItem from "./TaskItem"

function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDeleteTask={onDeleteTask}
                    onToggleTask={onToggleTask}
                    onEditTask={onEditTask}
                />
            ))}
        </ul>
    )
}

export default TaskList