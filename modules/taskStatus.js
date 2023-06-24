// eslint-disable-next-line import/no-cycle
import { tasks } from '../src/index.js';

export default function updateIndexes() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}
