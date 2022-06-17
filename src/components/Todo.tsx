import { Button, Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../styles/Todo.css";
import { ITodo } from "./Main";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";

interface IProps {
  id: number;
  todo: string;
  isDone: boolean;
  todos: ITodo[];
  origTodos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

const Todo: FC<IProps> = ({ id, todo, isDone, todos, origTodos, setTodos }) => {
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

  const deleteItem = (id: number): void => {
    setTodos(origTodos.filter((task) => task.id !== id));
  };

  return (
    <Box>
      <Box
        className={isDone ? "todo-wrapper strike" : "todo-wrapper"}
        sx={{
          backgroundColor: "#d1e5ff",
        }}
      >
        <Checkbox
          size="medium"
          color="success"
          onChange={() => modify(id, todo, !isDone)}
          checked={isDone}
        />
        <Typography variant="h6">{todo}</Typography>
        <Button onClick={() => deleteItem(id)}>
          <DeleteIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Todo;
