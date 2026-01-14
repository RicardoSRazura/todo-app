import type { ITask } from '../types/Task';
import TaskItem from './TaskItem';
interface TaskListProps {
  tasks: ITask[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskList({tasks, onToggle, onDelete}: TaskListProps) {

  return (
    <ul>
        {tasks.map((task) => (
            <TaskItem task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </ul>
  )
}
