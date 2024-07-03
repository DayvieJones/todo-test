import "./TodoBody.css";
import TodoItem from "../todoitem/TodoItem";

function TodoBody({ todos, handleChangeCheckbox, deleteTodoItemFromList }) {
  function showNoTodoItems() {
    if (todos.length === 0) {
      return <span>No Todos</span>;
    }
  }

  return (
    <div class="todoBody">
      {todos.map((todo) => (
        <TodoItem
          todoItem={todo}
          handleChangeCheckbox={handleChangeCheckbox}
          deleteTodoItemFromList={deleteTodoItemFromList}
        />
      ))}
      {showNoTodoItems()}
    </div>
  );
}

export default TodoBody;
