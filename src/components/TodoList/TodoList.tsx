import React from "react";
import { Todo } from "../../utils/typescriptUtils/model";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="flex w-full">
      <div className="bg-blue-600/40 rounded-xl mr-8">
        <h1 className="m-5 font-bold text-2xl">Active Tasks</h1>
        <div
          className={`${
            todos.length && "bg-black/20"
          } w-full flex flex-wrap justify-evenly rounded-xl rounded-t-none py-7`}
        >
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
      </div>
      <div className="bg-green-600/40 rounded-xl">
        <h1 className="m-5 font-bold text-2xl">Completed Tasks</h1>
        <div
          className={`${
            todos.length && "bg-black/20"
          } w-full flex flex-wrap justify-evenly rounded-xl rounded-t-none py-7`}
        >
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
