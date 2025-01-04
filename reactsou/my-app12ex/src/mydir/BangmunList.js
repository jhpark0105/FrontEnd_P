import React from "react";
import Bangmun from "./Bangmun";
import "../mycss/BangmunListTemplate.css";

const BangmunList = ({visits,onRemove})=>{
  return (
    <div className="bangmun-list">
      <table border={1}>
        <thead>
          <tr>
            <th>거래처 이름</th>
            <th>주소</th>
            <th>방문일</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((visit) => (
            <Bangmun
              {...visit}  // visit 객체의 모든 속성을 props로 전달
              onRemove={onRemove}  // onRemove 함수도 전달
              key={visit.id}  // key를 id로 설정
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default BangmunList;