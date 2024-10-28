import styles from './Task.module.css';

function Task({ task, toggleTask }) {
  return (
    <div
      onClick={() => toggleTask(task.id)}
      className={`${styles.task} ${task.completed ? styles.completed : ''}`}
    >
      {task.text}
    </div>
  );
}

export default Task;
