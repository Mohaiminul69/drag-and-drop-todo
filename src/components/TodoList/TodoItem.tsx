import React from "react";
import { Todo } from "../../utils/typescriptUtils/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="flex my-5 shadow-md shadow-black items-center w-72 h-12 bg-primary rounded-xl justify-between px-4 text-black">
      <h1 className="font-bold text-xl capitalize">{todo.todo}</h1>
      <div className="flex">
        <span className="cursor-pointer">
          <AiFillEdit />
        </span>
        <span className="cursor-pointer mx-4">
          <AiFillDelete />
        </span>
        <span className="cursor-pointer">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
