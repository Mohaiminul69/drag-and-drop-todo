import React, { useState } from "react";
import InputField from "../components/InputField/InputField";
import TodoList from "../components/TodoList/TodoList";
import { Todo } from "../utils/typescriptUtils/model";

const Home = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="w-screen h-screen bg-secondary flex flex-col items-center">
      <h1 className="text-white mt-14 font-bold text-4xl uppercase z-10">
        Taskify
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <div className="h-fit mt-8 w-full flex justify-center px-8">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Home;
