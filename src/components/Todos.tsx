import { ITodo } from "./Main";
import Todo from "./Todo";

interface IProps {
  todos: ITodo[];
  origTodos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

const Todos = (props: IProps) => {
  const { todos, origTodos, setTodos } = props;

  return (
    <div>
      {todos.map((task) => {
        return (
          <div key={task.id}>
            <Todo
              id={task.id}
              todo={task.todo}
              isDone={task.isDone}
              todos={todos}
              origTodos={origTodos}
              setTodos={setTodos}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
