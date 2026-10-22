const API_URL = "http://localhost:3001/tasks"

export function getTasks() {
    return fetch(API_URL).then((response) => response.json())
}

export function createTask(task) {
    return fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    }).then((response) => response.json())
}

export function deleteTaskById(id) {
    return fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
}

export function updateTask(id, data) {
    return fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => response.json())
}