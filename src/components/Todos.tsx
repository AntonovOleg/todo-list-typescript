import { Box } from "@mui/system";
import { FC } from "react";
import { ITodo } from "./Main";
import Todo from "./Todo";

interface IProps {
  todos: ITodo[];
  origTodos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

const Todos: FC<IProps> = ({ todos, origTodos, setTodos }) => {
  return (
    <Box
      sx={{
        mt: "30px",
      }}
    >
      {todos.map((task) => {
        return (
          <Box
            key={task.id}
            sx={{
              mt: "10px",
            }}
          >
            <Todo
              id={task.id}
              todo={task.todo}
              isDone={task.isDone}
              todos={todos}
              origTodos={origTodos}
              setTodos={setTodos}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Todos;
