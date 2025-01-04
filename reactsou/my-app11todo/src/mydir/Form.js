import "../mycss/Form.css";

const Form = ({value, onChange, onCreate, onKeyDown}) => {
  return (
    <div className="form">
      할 일 입력 : <input value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      />
      <div className="create-button" onClick={onCreate}> 등 록 </div>
    </div>
  );
}

export default Form;