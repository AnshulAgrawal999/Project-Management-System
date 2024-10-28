import styles from './TaskList.module.css';
import Task from '../Task/Task';

function TaskList({ tasks, toggleTask }) {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </div>
  );
}

export default TaskList;
