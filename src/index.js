import './style.css';
import { renderTasks, addTask, deleteAllTasks } from './task.js';

document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('addTaskBtn');
  addTaskBtn.addEventListener('click', addTask);

  const deleteAllBtn = document.getElementById('deleteAllBtn');
  deleteAllBtn.addEventListener('click', deleteAllTasks);

  renderTasks();
});