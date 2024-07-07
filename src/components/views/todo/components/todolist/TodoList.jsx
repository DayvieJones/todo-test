import "./TodoList.css";
import TodoHeader from "../todoheader/TodoHeader";
import TodoBody from "../todobody/TodoBody";
import { useState } from "react";

function TodoList({}) {
  const [todos, setTodos] = useState([
    // { id: Math.random(), content: "Coden", done: false },
  ]);

  //Checkbox change Event
  function handleChangeCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const uptadedTodos = [...todos];
    uptadedTodos.splice(todoItemIndex, 1, todoItem);
    setTodos(uptadedTodos);
  }

  function addTodoItemToList(todoItem) {
    const uptadedTodos = [...todos];
    uptadedTodos.push(todoItem);
    setTodos(uptadedTodos);
  }

  function deleteTodoItemFromList(todoID) {
    const filteredTodos = todos.filter((todo) => todo.id !== todoID);
    setTodos(filteredTodos);
  }

  return (
    <div class="todo-list">
      <TodoHeader addTodoItemToList={addTodoItemToList} />
      <TodoBody
        todos={todos}
        handleChangeCheckbox={handleChangeCheckbox}
        deleteTodoItemFromList={deleteTodoItemFromList}
      />
    </div>
  );
}

export default TodoList;
