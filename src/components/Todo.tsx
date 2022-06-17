import "../styles/Todo.css";
import { ITodo } from "./Main";

interface IProps {
  id: number;
  todo: string;
  isDone: boolean;
  todos: ITodo[];
  origTodos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

const Todo = (props: IProps) => {
  const { id, todo, isDone, todos, origTodos, setTodos } = props;

  const modify = (id: number, todo: string, isDone: boolean) => {
    let tmpTodos: ITodo[] = [...origTodos];
    tmpTodos.map((task) => {
      if (task.id === id) {
        task.todo = todo;
        task.isDone = isDone;
      }
      return task;
    });
    setTodos(tmpTodos);
  };

  const deleteItem = (id: number) => {
    setTodos(origTodos.filter((task) => task.id !== id));
  };

  return (
    <div className={isDone?"todo-wrapper strike":"todo-wrapper"}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => modify(id, todo, !isDone)}
      />
      {todo}
      <div className="btn-del" onClick={() => deleteItem(id)}>
        X
      </div>
    </div>
  );
};

export default Todo;
