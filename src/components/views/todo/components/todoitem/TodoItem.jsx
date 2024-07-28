import "./TodoItem.css";
import CheckBox from "../../../../checkbox/Checkbox";
import Button from "../../../../button/Button";

function TodoItem({ todoItem, handleChangeCheckbox, deleteTodoItemFromList }) {
  function handleDeleteTodoItem() {
    deleteTodoItemFromList(todoItem.id);
  }

  function handleChangeCheckboxEvent(event) {
    const updatedTodoItem = { ...todoItem, done: event.target.checked };
    handleChangeCheckbox(updatedTodoItem);
  }

  return (
    <div className={`todo-item${todoItem.done ? " done" : ""}`}>
      <CheckBox
        id={todoItem.id}
        checked={todoItem.done}
        content={todoItem.content}
        handleChangeCheckbox={handleChangeCheckboxEvent}
      />
      <Button
        buttonContent={"Delete"}
        handleButtonClickEvent={handleDeleteTodoItem}
      />
    </div>
  );
}

export default TodoItem;
