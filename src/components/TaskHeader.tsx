import type { ITask } from '../types/Task'
interface TaskHeaderProps{
    tasks: ITask[]
    completed: number
    handledChanged?: () => void;

}

export default function TaskHeader({completed, tasks}: TaskHeaderProps) {
  return (
    <div>
        <h1>Todo App</h1>
        <p>Tareas completadas: {completed} / {tasks.length}</p>
        <input type="text" placeholder='Nueva Tarea'/>
        <select name="" id=""></select>
        <select name="" id=""></select>
        <button>Agregar tarea</button>
    </div>
  )
}
