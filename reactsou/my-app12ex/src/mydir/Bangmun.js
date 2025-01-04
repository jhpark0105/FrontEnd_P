import React from "react";
import "../mycss/BangmunListTemplate.css";

const Bangmun = ({ id, clientName, address, visitDate, onRemove }) => {
  return (
    <tr>
      <td>{clientName}</td>
      <td>{address}</td>
      <td>{visitDate}</td>
      <td><button className="delete-button" onClick={() => onRemove(id)}>삭제</button></td>
    </tr>
  );
};

export default Bangmun;