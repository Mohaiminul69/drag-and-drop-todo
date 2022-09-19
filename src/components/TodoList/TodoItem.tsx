import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../utils/typescriptUtils/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className="flex my-5 shadow-md shadow-black items-center w-72 h-12 bg-primary rounded-xl justify-between px-4 text-black"
    >
      {edit ? (
        <input
          value={editTodo}
          ref={inputRef}
          className="px-2 rounded-md outline-none max-w-full w-40"
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="font-bold text-xl capitalize">{todo.todo}</s>
      ) : (
        <h1 className="font-bold text-xl capitalize">{todo.todo}</h1>
      )}
      <div className="flex">
        <span
          onClick={() => {
            if (!todo.isDone) setEdit(!edit);
          }}
          className="cursor-pointer"
        >
          <AiFillEdit />
        </span>
        <span
          onClick={() => handleDelete(todo.id)}
          className="cursor-pointer mx-4"
        >
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(todo.id)} className="cursor-pointer">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
