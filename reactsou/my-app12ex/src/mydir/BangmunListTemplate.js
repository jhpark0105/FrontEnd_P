import React from "react";
import "../mycss/BangmunListTemplate.css";

const BangmunListTemplate = ({form,children}) => {
  return(
    <main className="bangmun-list-template">
      <div className="title">거래처 정보 입력✍️</div>

      <section className="form-wrapper">
        {form}
      </section>

      <section className="list-wrapper">
        {children}
      </section>
    </main>
  );
}

export default BangmunListTemplate;