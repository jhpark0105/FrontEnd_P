import React, { useState, useEffect } from "react";
import Pagination from 
import ListSearch from "./ListSearch";
import styles from "../ListSearch.module.css";
import DateSearch from "./DateSearch";
import { RiSearchLine } from "react-icons/ri";

function ReservationList({ reservations, handleDetail, setShowModal }) {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 관리
  const [filteredData, setFilteredData] = useState([]); // 필터링된 데이터 상태 관리
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 15; // 페이지당 항목 수

  const [selectedFilter, setSelectedFilter] = useState("serviceName"); // 선택된 기준 필터
  const [startDate, setStartDate] = useState(null); // 기간 조회
  const [endDate, setEndDate] = useState(null); // 기간 조회

  // 초기 렌더링 시 filteredData를 reservations로 설정
  useEffect(() => {
    setFilteredData(reservations);
  }, [reservations]);

  // 페이지별 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // currentItems : filteredData를 기준으로 현재 페이지에 해당하는 데이터를 계산
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // 검색어 상태를 업데이트 해주는 함수
  const onChange = (term) => {
    setSearchTerm(term); // 검색어 상태만 업데이트
  };

  // 검색어에 따른 필터링 처리
  const handleSearchClick = () => {
      const filtered = reservations.filter((item) => {
        const selectedServiceName = item.service.serviceName.toLowerCase().includes(searchTerm.toLowerCase());
        const selectedCustomerName = item.customer.customerName.toLowerCase().includes(searchTerm.toLowerCase());
        const selectedMemberName = item.member.memberName.toLowerCase().includes(searchTerm.toLowerCase());

        //선택된필터에 따라 필터링
        if(selectedFilter==="serviceName"){ return selectedServiceName; }
        else if(selectedFilter==="customerName"){ return selectedCustomerName; }
        else if(selectedFilter==="memberName"){ return selectedMemberName; }
        else { return selectedServiceName || selectedCustomerName || selectedMemberName;}
      }
    );
    setFilteredData(filtered); // 필터링된 데이터 상태 업데이트
    setCurrentPage(1); // 검색 후 첫 페이지로 이동
  };

    // 기간 검색용
    const handleSearch = () => {
      // 날짜가 비어있는 경우 경고 메시지
      if (!startDate || !endDate) {
          alert("시작 날짜와 종료 날짜를 모두 선택해주세요.");
          return;
      }
  
      // Date 객체에서 "YYYY-MM-DD" 형식으로 변환
      const formattedStartDate = new Date(startDate).toLocaleDateString("en-CA");  // "2024-12-01"
      const formattedEndDate = new Date(endDate).toLocaleDateString("en-CA");   // "2024-12-31"
  
      // 고객 데이터를 날짜 범위로 필터링
      const filteredReservations = reservations.filter((reservation) => {
          const reservationDate = new Date(reservation.reservationDate).toLocaleDateString("en-CA");  // "2024-12-01"
          return reservationDate >= formattedStartDate && reservationDate <= formattedEndDate;
      });
  
      // 필터링된 고객 목록을 상태에 저장
      setFilteredData(filteredReservations);  // filteredData는 필터링된 고객 리스트
      setCurrentPage(1); // 필터링 후 첫 페이지로 이동
  };

  return (
    <div>
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >

        {/* 날짜 검색 */}
        <div style={{ display: "flex", alignItems: "center", flex: "1" }}>
            <DateSearch
                selectedDate={startDate}
                setSelectedDate={setStartDate}
            />
            <span style={{ margin: "0 10px" }}>-</span>
            <DateSearch
                selectedDate={endDate}
                setSelectedDate={setEndDate}
            />
            <button
                className={styles.searchButton}
                style={{ marginLeft: "10px" }} // 버튼 여백
                disabled={new Date(startDate) > new Date(endDate)}
                onClick={handleSearch}
            >
                <RiSearchLine />
            </button>
        </div>


        {/* 검색어 입력 및 필터링 */}
        {/* <div>
          <input
            type="text"
            placeholder="서비스명 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearchClick}>검색</button>
        </div> */}
        {/* ListSearch 컴포넌트를 왼쪽 끝에 배치 */}
        <div className={styles["list-component-container"]} style={{ flex: "none" }}>
          <ListSearch 
          searchTerm={searchTerm} 
          onChange={onChange} 
          handleSearchClick={handleSearchClick}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter} />
        </div>    
        

        <button onClick={() => setShowModal(true)} className="btn btn-success mb-3">
          예약 등록
        </button>
      </div>

      <table className="table table-bordered" style={{ margin: "0 auto", width: "80%" }}>
        <thead>
          <tr>
            <th>예약 번호</th>
            <th>서비스 명</th>
            <th>예약 날짜</th>
            <th>예약 시간</th>
            <th>예약자</th>
            <th>담당 직원</th>
            <th>특이사항</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((reservation) => (
              <tr key={reservation.reservationNo}>
                <td>{reservation.reservationNo}</td>
                <td>{reservation.service?.serviceName || "정보 없음"}</td> {/* 안전한 접근 */}
                <td>{reservation.reservationDate}</td>
                <td>{reservation.reservationTime}</td>
                <td>
                  <span
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                    onClick={() => handleDetail(reservation)}
                  >
                    {reservation.customer?.customerName || "정보 없음"} {/* 안전한 접근 */}
                  </span>
                </td>
                <td>{reservation.member?.memberName || "정보 없음"}</td>
                <td>{reservation.reservationComm || "없음"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">등록된 예약이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ReservationList;
