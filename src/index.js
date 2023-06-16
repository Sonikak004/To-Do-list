import './style.css';

const tasks = [
  { description: 'First task', completed: false, index: 1 },
  { description: 'Second task', completed: true, index: 2 },
  { description: 'Third task', completed: false, index: 3 },
  { description: 'Fourth task', completed: true, index: 4 },
  { description: 'Fifth task', completed: false, index: 5 },
];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('div');
    listItem.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    listItem.appendChild(checkbox);

    const description = document.createElement('span');
    description.textContent = task.description;
    description.classList.add('font');
    listItem.appendChild(description);

    const options = document.createElement('div');
    options.classList.add('options');

    const dots = document.createElement('i');
    dots.classList.add('fas', 'fa-ellipsis-v');
    options.appendChild(dots);

    listItem.appendChild(options);

    taskList.appendChild(listItem);
  });
}

renderTasks();
