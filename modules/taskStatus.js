export default function updateIndexes() {
  const tasks = [];
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}