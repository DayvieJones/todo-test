import TodoList from "./todolist/TodoList";
import "../Todo.css";

function Todo() {
  //Rückgabe der ToDo Items
  return (
    <div id="todo-view">
      <TodoList />
    </div>
  );
}

export default Todo;
