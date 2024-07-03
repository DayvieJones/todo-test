import "./Input.css";
function Input({ inputValue, handleInputChangeEvent }) {
  return (
    <input
      placeholder="Enter here your ToDo's"
      type="text"
      onChange={handleInputChangeEvent}
      value={inputValue}
    />
  );
}

export default Input;
