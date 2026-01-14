import type { ITask } from '../types/Task'
interface TaskProps {
  task: ITask;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}


export default function TaskItem({task, onToggle, onDelete}: TaskProps) {
  return (
    <div>
        <p>{task.title}</p>
        <p>{task.priority}</p>
        <input type="text" placeholder='Note'/>
        <input type="checkbox" onChange={() => onToggle(task.id)}/>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>

    </div>
  )
}
