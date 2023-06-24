import {
  addTask, renderTasks, tasks, clearAllTasks,
} from '../index.js';

// part 1 test 1

jest.mock('../style.css', () => ({}));

jest.spyOn(document, 'getElementById').mockReturnValue({
  innerHTML: '',
  appendChild: jest.fn(),
});

describe('addTask', () => {
  beforeEach(() => {
    localStorage.clear();
    tasks.length = 0;
  });

  test('should add a new task to the tasks array', () => {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = 'Task 1';

    addTask();

    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('Task 1');
    expect(tasks[0].completed).toBe(false);
    expect(tasks[0].index).toBe(1);
  });

  test('should save tasks to localStorage', () => {
    const taskInput = document.getElementById('taskInput');
    taskInput.value = 'Task 1';

    addTask();

    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    expect(savedTasks.length).toBe(1);
    expect(savedTasks[0].description).toBe('Task 1');
    expect(savedTasks[0].completed).toBe(false);
    expect(savedTasks[0].index).toBe(1);
  });
});

// part 1 test 2

describe('delete icon', () => {
  test('should call deleteTask function when delete icon is clicked', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();

    const deleteIcons = document.querySelectorAll('.delete-icon');

    deleteIcons.forEach((deleteIcon, index) => {
      const deleteTaskMock = jest.fn();

      window.deleteTask = deleteTaskMock;

      deleteIcon.click();

      expect(deleteTaskMock).toHaveBeenCalledWith(index + 1);
    });
  });
});

// testing Part 2

// part 2 test 1

jest.spyOn(document, 'getElementById').mockReturnValue({
  innerHTML: '',
  appendChild: jest.fn(),
});
jest.mock('../../modules/taskStatus.js');
describe('clearAllTasks', () => {
  beforeEach(() => {
    localStorage.clear();
    tasks.length = 0;
  });
  test('should clear all tasks', () => {
    tasks.push(
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: true, index: 3 },
    );
    localStorage.setItem(
      'tasks',
      JSON.stringify([
        { description: 'Task 1', completed: true, index: 1 },
        { description: 'Task 2', completed: false, index: 2 },
        { description: 'Task 3', completed: true, index: 3 },
      ]),
    );
    clearAllTasks();
    expect(tasks.length).toBe(1);
    // eslint-disable-next-line no-useless-escape
    expect(localStorage.getItem('tasks')).toBe('[{\"description\":\"Task 2\",\"completed\":false,\"index\":1}]');
  });
});

// part 2 test 2

describe('editTask function', () => {
  test('should update task description when task description input is changed', () => {
    const tasks = [
      { description: 'Task 1', completed: false, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();

    const taskDescriptionInputs = document.querySelectorAll('.task input[type="text"]');

    taskDescriptionInputs.forEach((input, index) => {
      const newDescription = `New Description ${index}`;
      input.value = newDescription;

      input.dispatchEvent(new Event('change'));

      expect(tasks[index].description).toBe(newDescription);
    });
  });
});
