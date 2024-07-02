import CheckBox from "../../../../checkbox/Checkbox";
import Button from "../../../../button/Button";

function TodoItem({ todoItem, handleChangeCheckbox, deleteTodoItemFromList }) {
  function handleDeleteTodoItem() {
    deleteTodoItemFromList(todoItem.id);
  }

  function handleChangeCheckboxEvent(event) {
    const uptadedTodoItem = { ...todoItem };
    uptadedTodoItem.done = event.target.checked;
    handleChangeCheckbox(uptadedTodoItem);
  }

  return (
    <div>
      <CheckBox
        id={todoItem.id}
        checked={todoItem.done}
        content={todoItem.content}
        handleChangeCheckbox={handleChangeCheckboxEvent}
      />
      <Button
        buttonContent={"Löschen"}
        handleButtonClickEvent={handleDeleteTodoItem}
      />
    </div>
  );
}

export default TodoItem;
