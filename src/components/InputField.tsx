import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import "../styles/InputField.css";
import { ITodo } from "./Main";

interface IProps {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

const InputField: FC<IProps> = ({ todos, setTodos }) => {
  const [text, setText] = useState<string>("");

  const create = (): void => {
    if (!text) return;
    setTodos([
      ...todos,
      {
        id: Math.random(),
        todo: text,
        isDone: false,
      },
    ]);
    setText("");
  };

  return (
    <Box
      sx={{
        height: "30px",
        mt: "10px",
      }}
    >
      <TextField
        size="small"
        id="standart-basic"
        label="Enter task and press Enter"
        onKeyDown={(e) => (e.keyCode === 13 ? create() : null)}
        onChange={(e) => setText(e.target.value)}
        value={text}
        sx={{
          mt: "5px",
        }}
      />
    </Box>
  );
};

export default InputField;
