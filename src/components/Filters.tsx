import { Badge, Box, Button } from "@mui/material";
import { FC } from "react";
import "../styles/Filters.css";
import { filters, ITodo } from "./Main";
import Todos from "./Todos";

interface IProps {
  filter: number;
  setFilter: (filter: number) => void;
  todos: ITodo[];
  activeTodos: ITodo[];
  completedTodos: ITodo[];
}

const Filters: FC<IProps> = ({
  filter,
  setFilter,
  todos,
  activeTodos,
  completedTodos,
}) => {
  
  return (
    <Box
      sx={{
        mt: "20px",
      }}
    >
      <Badge badgeContent={todos.length} color="primary">
        <Button
          onClick={() => setFilter(filters.All)}
          variant={filter === filters.All ? "contained" : "outlined"}
          sx={{
            width: "150px",
          }}
        >
          All
        </Button>
      </Badge>

      <Badge badgeContent={activeTodos.length} color="primary">
        <Button
          variant={filter === filters.Active ? "contained" : "outlined"}
          onClick={() => setFilter(filters.Active)}
          sx={{
            ml: "40px",
            width: "150px",
          }}
        >
          Active
        </Button>
      </Badge>

      <Badge badgeContent={completedTodos.length} color="primary">
        <Button
          variant={filter === filters.Completed ? "contained" : "outlined"}
          onClick={() => setFilter(filters.Completed)}
          sx={{
            ml: "40px",
            width: "150px",
          }}
        >
          Completed
        </Button>
      </Badge>
    </Box>
  );
};

export default Filters;
