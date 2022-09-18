import React from "react";
import { Todo } from "../../utils/typescriptUtils/model";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div
      className={`${
        todos.length && "bg-black/40"
      } w-full flex flex-wrap justify-evenly rounded-xl py-7`}
    >
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
