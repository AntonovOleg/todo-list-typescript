import { FC, useState } from "react";
import InputField from "./InputField";
import Todos from "./Todos";
import Filters from "./Filters";
import Options from './Options';
import { Container } from "@mui/system";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

export interface ITodo {
  id: number;
  todo: string;
  isDone: boolean;
}

export const enum filters {
  All,
  Active,
  Completed,
}

const Main: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<number>(filters.All);
  const activeTodos = todos.filter((task) => !task.isDone);
  const completedTodos = todos.filter((task) => task.isDone);
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);

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

  const completeAll = (): void => {
    setTodos(todos.map((task) => {
      task.isDone = true;
      return task
    }))
  };
  const deleteAll = (): void => {
    setTodos([]);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "#d9eeff",
        minHeight: "700px",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Todo List</Typography>
          
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              ml: "20px",
            }}
            onClick={() => setOptionsVisible(true)}
          >
            Options
          </Button>

        </Toolbar>
      </AppBar>
      <InputField todos={todos} setTodos={setTodos} />
      <Todos todos={renderTodos} origTodos={todos} setTodos={setTodos} />
      <Filters
        filter={filter}
        setFilter={setFilter}
        todos={todos}
        activeTodos={activeTodos}
        completedTodos={completedTodos}
      />
      <Options optionsVisible={optionsVisible} setOptionsVisible={setOptionsVisible} completeAll={completeAll} deleteAll={deleteAll} />
    </Container>
    
  );
};

export default Main;
