import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../../utils/typescriptUtils/model";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  completedTodos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="flex w-full">
      <Droppable droppableId="TodoList">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="bg-blue-600/40 rounded-xl mr-8"
          >
            <h1 className="m-5 font-bold text-2xl">Active Tasks</h1>
            <div
              className={`${
                todos.length && "bg-black/20"
              } w-full flex flex-wrap justify-evenly rounded-xl rounded-t-none py-7`}
            >
              {todos.map((todo, index) => (
                <TodoItem
                  index={index}
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodoRemove">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="bg-green-600/40 rounded-xl"
          >
            <h1 className="m-5 font-bold text-2xl">Completed Tasks</h1>
            <div
              className={`${
                todos.length && "bg-black/20"
              } w-full flex flex-wrap justify-evenly rounded-xl rounded-t-none py-7`}
            >
              {completedTodos.map((todo, index) => (
                <TodoItem
                  index={index}
                  todo={todo}
                  key={todo.id}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
