import "./Button.css";

function Button({ buttonContent, handleButtonClickEvent }) {
  return <button onClick={handleButtonClickEvent}> {buttonContent}</button>;
}

export default Button;
