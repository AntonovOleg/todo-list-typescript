import { useState } from "react";
import InputField from "./InputField";
import Todos from "./Todos";
import Filters from "./Filters";

export interface ITodo {
  id: number;
  todo: string;
  isDone: boolean;
}

const Main = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const activeTodos = todos.filter((task) => !task.isDone);
  const completedTodos = todos.filter((task) => task.isDone);

  let renderTodos: ITodo[] = [];
  switch (filter) {
    case "All":
      renderTodos = todos;
      break;
    case "Active":
      renderTodos = activeTodos;
      break;
    case "Completed":
      renderTodos = completedTodos;
      break;
    default:
      alert("Ошибка сопоставления фильтра");
      break;
  }

  return (
    <div>
      <InputField todos={todos} setTodos={setTodos} />
      <Todos todos={renderTodos} setTodos={setTodos} />
      <Filters filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default Main;
