
const Form = ({clientName, address, visitDate, onKeyDown, 
  onClientChange, onAddressChange, onDateChange,onCreate}) => {
    return (
      <div className="form">
        거래처 이름 : <input value={clientName} onChange={onClientChange} onKeyDown={onKeyDown}/>
        &nbsp;&nbsp;&nbsp;
        주소 : <input value={address} onChange={onAddressChange} onKeyDown={onKeyDown}/>
        &nbsp;&nbsp;&nbsp;
        방문일 : <input type="date" value={visitDate} onChange={onDateChange} onKeyDown={onKeyDown}/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={onCreate}> 등 록 </button>
      </div>
    );
  }

  export default Form;