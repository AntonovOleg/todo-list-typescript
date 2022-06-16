import { useState } from "react";
import "../styles/InputField.css";
import { ITodo } from "./Main";

interface IProps {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

const InputField = (props: IProps) => {
  const [text, setText] = useState<string>("");
  const { todos, setTodos } = props;

  const create = () => {
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
    <div className="input-field-wrapper">
      <input
        onKeyDown={(e) => (e.keyCode === 13 ? create() : null)}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </div>
  );
};

export default InputField;
