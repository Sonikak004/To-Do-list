import './style.css';

let tasks = [];

const renderTasks = () => {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  const updateIndexes = () => {
    tasks.forEach((task, index) => {
      task.index = index + 1;
    });
  };

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const newTask = {
      description: taskInput.value,
      completed: false,
      index: tasks.length + 1,
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = '';
  };

  const toggleTaskStatus = (index) => {
    tasks[index - 1].completed = !tasks[index - 1].completed;
    saveTasks();
    renderTasks();
  };

  const deleteTask = (index) => {
    tasks = tasks.filter((task) => task.index !== index);
    updateIndexes();
    saveTasks();
    renderTasks();
  };

  const editTask = (index, newDescription) => {
    tasks[index - 1].description = newDescription;
    saveTasks();
    renderTasks();
  };

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskStatus(task.index));
    li.appendChild(checkbox);

    const taskDescription = document.createElement('input');
    taskDescription.classList.add('inputoutline');
    taskDescription.type = 'text';
    taskDescription.value = task.description;
    taskDescription.addEventListener('change', () => {
      editTask(task.index, taskDescription.value);
    });
    li.appendChild(taskDescription);

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'delete-icon fas fa-trash-alt';
    deleteIcon.addEventListener('click', () => deleteTask(task.index));
    li.appendChild(deleteIcon);

    taskList.appendChild(li);
  });

  const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      tasks = JSON.parse(savedTasks);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    addTaskBtn.addEventListener('click', addTask);

    loadTasks();
    renderTasks();
  });
};

renderTasks();
