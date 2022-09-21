import React, { Fragment } from "react";
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
    <Fragment>
      {todos.length !== 0 && (
        <div className="flex w-full">
          <Droppable droppableId="TodoList">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  background: `${
                    snapshot.isDraggingOver ? "#003E50" : "#017191"
                  }`,
                }}
                className="h-fit w-1/2 transition-colors duration-300 rounded-xl mr-8"
              >
                <h1 className="m-5 font-bold text-2xl">Active Tasks</h1>
                <div className="bg-black/20 h-full w-full flex flex-wrap justify-evenly rounded-xl rounded-t-none py-7">
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
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  background: `${
                    snapshot.isDraggingOver ? "#01523d" : "#018c69"
                  }`,
                }}
                className="w-1/2 h-fit transition-colors duration-300 rounded-xl"
              >
                <h1 className="m-5 font-bold text-2xl">Completed Tasks</h1>
                <div className="bg-black/20 h-full w-full flex flex-wrap justify-evenly rounded-xl rounded-t-none py-7">
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
      )}
    </Fragment>
  );
};

export default TodoList;
