function CheckBox({ id, checked, content, handleChangeCheckbox }) {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChangeCheckbox}
      />
      <label htmlFor={id} className={checked ? "done" : ""}>
        {content}
      </label>
    </div>
  );
}

export default CheckBox;
