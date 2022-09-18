import React, { useRef } from "react";
import "./inputFiled.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
      className="relative flex items-center w-1/3 mt-8"
    >
      <input
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="inputBox transition-shadow duration-500 bg-blue-100 outline-none shadow-lg shadow-black rounded-full px-6 py-3 text-black w-full"
        placeholder="Enter your task..."
      />
      <button
        type="submit"
        className="active:scale-90 hover:bg-blue-500 absolute right-2 bg-blue-600 rounded-full shadow-sm shadow-black p-1.5 px-4"
      >
        GO
      </button>
    </form>
  );
};

export default InputField;
