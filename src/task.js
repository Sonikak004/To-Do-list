let tasks = [];

export const renderTasks = () => {
  const toggleTaskStatus = (index) => {
    tasks[index - 1].completed = !tasks[index - 1].completed;
    renderTasks();
  };

  const deleteTask = (index) => {
    tasks = tasks.filter((task) => task.index !== index);
    renderTasks();
  };

  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskStatus(task.index));
    li.appendChild(checkbox);

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;
    if (task.completed) {
      taskDescription.classList.add('completed');
    }
    li.appendChild(taskDescription);

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'delete-icon fas fa-trash-alt';
    deleteIcon.addEventListener('click', () => deleteTask(task.index));
    li.appendChild(deleteIcon);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(task.index));
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });
};

export const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const newTask = {
    description: taskInput.value,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  renderTasks();
  taskInput.value = '';
};

export const deleteAllTasks = () => {
  tasks = [];
  renderTasks();
};
