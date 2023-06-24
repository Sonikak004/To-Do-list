import { addTask, clearAllTasks, tasks } from '../index.js';

// Mock the style.css file
jest.mock('../style.css', () => ({}));

// Mock the getElementById method to return a dummy taskList element
jest.spyOn(document, 'getElementById').mockReturnValue({
  innerHTML: '',
  appendChild: jest.fn(),
});

describe('addTask', () => {
  beforeEach(() => {
    // Clear localStorage and reset tasks array before each test
    localStorage.clear();
    tasks.length = 0;
  });

  test('should add a new task to the tasks array', () => {
    // Arrange
    const taskInput = document.getElementById('taskInput');
    taskInput.value = 'Task 1';

    // Act
    addTask();

    // Assert
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('Task 1');
    expect(tasks[0].completed).toBe(false);
    expect(tasks[0].index).toBe(1);
  });

  test('should save tasks to localStorage', () => {
    // Arrange
    const taskInput = document.getElementById('taskInput');
    taskInput.value = 'Task 1';

    // Act
    addTask();

    // Assert
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    expect(savedTasks.length).toBe(1);
    expect(savedTasks[0].description).toBe('Task 1');
    expect(savedTasks[0].completed).toBe(false);
    expect(savedTasks[0].index).toBe(1);
  });

  // Add more test cases if needed
});

jest.spyOn(document, 'getElementById').mockReturnValue({
  innerHTML: '',
  appendChild: jest.fn(),
});

// Mock the updateIndexes function
jest.mock('../../modules/taskStatus.js');

describe('clearAllTasks', () => {
  beforeEach(() => {
    // Clear localStorage and reset tasks array before each test
    localStorage.clear();
    tasks.length = 0;
  });

  test('should clear all tasks', () => {
    // Arrange
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

    // Act
    clearAllTasks();

    // Assert
    expect(tasks.length).toBe(1);
    // eslint-disable-next-line no-useless-escape
    expect(localStorage.getItem('tasks')).toBe('[{\"description\":\"Task 2\",\"completed\":false,\"index\":1}]');
  });
});
