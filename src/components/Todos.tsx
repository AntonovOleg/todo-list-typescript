import { ITodo } from "./Main";
import Todo from "./Todo";

interface IProps {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

const Todos = (props: IProps) => {
  const { todos, setTodos } = props;

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
              setTodos={setTodos}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
