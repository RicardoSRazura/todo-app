import { useState } from "react";
import type { ITask } from "./types/Task";
import TaskHeader from "./components/TaskHeader";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const completedTasks = tasks.filter(
    (task) => task.completed !== task.completed
  ).length;

  const onToggle = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const onDelete = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }
  // const handledChange = (title: string) => {
  //   setTasks(prev => prev.map(task => task.id ? {...task, title: title}: task ))
  // }
  return (
    <>
      <TaskHeader completed={completedTasks} tasks={tasks} />
      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </>
  );
}

export default App;
