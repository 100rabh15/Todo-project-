
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Helpers
const createTaskElement = (task) => {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    if (task.completed) li.classList.add('completed');

    const span = document.createElement('span');
    span.textContent = task.title;

    const toggleButton = document.createElement('button');
    toggleButton.textContent = task.completed ? 'Undo' : 'Done';

    toggleButton.addEventListener('click', async () => {
        const updated = await updateTask(task.id, { completed: !task.completed });
        if (updated) {
            li.classList.toggle('completed');
            toggleButton.textContent = updated.completed ? 'Undo' : 'Done';
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.background = '#6c757d';
    deleteButton.style.marginLeft = '8px';
    deleteButton.addEventListener('click', async () => {
        const ok = await deleteTask(task.id);
        if (ok) li.remove();
    });

    const btnWrapper = document.createElement('div');
    btnWrapper.appendChild(toggleButton);
    btnWrapper.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(btnWrapper);
    return li;
};

// API calls
const fetchTasks = async () => {
    const res = await fetch('/api/tasks');
    return res.json();
};

const addTask = async (title) => {
    const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });
    return res.json();
};

const updateTask = async (id, data) => {
    const res = await fetch('/api/tasks/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.ok ? res.json() : null;
};

const deleteTask = async (id) => {
    const res = await fetch('/api/tasks/' + id, { method: 'DELETE' });
    return res.ok;
};

// Init
(async () => {
    const tasks = await fetchTasks();
    tasks.forEach(task => taskList.appendChild(createTaskElement(task)));
})();

// Form submit
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = taskInput.value.trim();
    if (!title) return;

    const newTask = await addTask(title);
    taskList.appendChild(createTaskElement(newTask));
    taskInput.value = '';
});
