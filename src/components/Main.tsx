import { useState } from "react";
import InputField from "./InputField";
import Todos from "./Todos";
import Filters from "./Filters";

export interface ITodo {
  id: number;
  todo: string;
  isDone: boolean;
}

export const enum filters {
  All,
  Active,
  Completed
}

const Main = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<number>(filters.All);
  const activeTodos = todos.filter((task) => !task.isDone);
  const completedTodos = todos.filter((task) => task.isDone);

  let renderTodos: ITodo[] = [];
  switch (filter) {
    case filters.All:
      renderTodos = todos;
      break;
    case filters.Active:
      renderTodos = activeTodos;
      break;
    case filters.Completed:
      renderTodos = completedTodos;
      break;
    default:
      alert("Ошибка сопоставления фильтра");
      break;
  }

  return (
    <div>
      <InputField todos={todos} setTodos={setTodos} />
      <Todos todos={renderTodos} origTodos={todos} setTodos={setTodos} />
      <Filters filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default Main;
