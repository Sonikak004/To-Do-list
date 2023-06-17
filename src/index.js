import './style.css';
import updateIndexes from '../modules/taskStatus.js';

let tasks = [];

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const renderTasks = () => {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'task';

    const toggleTaskStatus = (index) => {
      tasks[index - 1].completed = !tasks[index - 1].completed;
      saveTasks();
      renderTasks();
    };

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskStatus(task.index));
    li.appendChild(checkbox);

    const editTask = (index, newDescription) => {
      tasks[index - 1].description = newDescription;
      saveTasks();
      renderTasks();
    };

    const taskDescription = document.createElement('input');
    taskDescription.classList.add('inputoutline');
    taskDescription.type = 'text';
    taskDescription.value = task.description;
    taskDescription.addEventListener('change', () => editTask(task.index, taskDescription.value));

    if (task.completed) {
      taskDescription.classList.add('completed');
    }

    li.appendChild(taskDescription);

    const deleteTask = (index) => {
      tasks = tasks.filter((task) => task.index !== index);
      updateIndexes();
      saveTasks();
      renderTasks();
    };

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'delete-icon fas fa-trash-alt';
    deleteIcon.addEventListener('click', () => deleteTask(task.index));
    li.appendChild(deleteIcon);

    taskList.appendChild(li);
  });
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

const clearAllTasks = () => {
  tasks = tasks.filter((task) => !task.completed);
  updateIndexes();
  saveTasks();
  renderTasks();
};

const loadTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('addTaskBtn');
  addTaskBtn.addEventListener('click', addTask);

  const clearAllBtn = document.getElementById('deleteAllBtn');
  clearAllBtn.addEventListener('click', clearAllTasks);

  loadTasks();
  renderTasks();
});
