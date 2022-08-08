import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type={"input"}
        placeholder="Enter a task"
        className="input__box"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></input>
      <button className="input_submit">Go</button>
    </form>
  );
};

export default InputField;
