import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReservationList from './reservation/ReservationList';
import ReservationDetail from './reservation/ReservationDetail';
import ReservationDelete from './reservation/ReservationDelete';
import CreateReservation from './reservation/CreateReservation';
import 'rsuite/dist/rsuite.min.css';


function App() {
  const [reservations, setReservations] = useState([]);
  const [state, setState] = useState({});
  const [showModal, setShowModal] = useState(false); // 등록 모달 상태 관리
  const [selectedReservation, setSelectedReservation] = useState(null); // 상세보기 데이터
  const [showDetailModal, setShowDetailModal] = useState(false); // 상세보기 모달 상태
  const [showDeleteModal, setShowDeleteModal] = useState(false); // 삭제 확인 모달
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태

  useEffect(() => {
    fetchReservation();
  }, []);

  // 전체 서비스 목록 조회
  const fetchReservation = () => {
    axios.get('http://localhost:8080/reservation')
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        toast.error("서비스 정보를 불러오는 데 오류가 발생했습니다.");
        console.error("Error fetching services:", error);
      });
  };

  //입력 폼에서 값 변경 시 상태 업데이트
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, // 변경된 입력값 상태 반영
    });
  };

  //insertprocess
  const handleInsert = () => {
    axios.post("http://localhost:8080/reservation", state)
      .then((res) => {
        if (res.data.isSuccess) {
          toast.success("서비스 등록 성공!");
          setShowModal(false); // insert 모달 닫기
          fetchReservation(); // 리로딩 후 최신 데이터 불러옴
        }
      })
      .catch((error) => {
        toast.error("서비스 등록 중 오류가 발생했습니다.");
        console.error("Error:", error);
      });
  };


 // 특정 서비스의 상세 정보 표시
 const handleDetail = (reservation) => {
  setSelectedReservation(reservation); // 선택한 서비스 데이터를 상태에 저장
  setShowDetailModal(true); // 상세보기 모달 열기
  setIsEditing(false); // update 모드 초기화
};

// 상세보기 모달에서 update 모드로 전환
const handleEdit = () => {
  setIsEditing(true);
};

// update process
const handleSave = () => {
  // 불러오는 객체 data 중 필요한 data만 담음
  const flattenedData = {
    reservationNo: selectedReservation.reservationNo,
    serviceName: selectedReservation.service?.serviceName,
    customerName: selectedReservation.customer?.customerName,
    memberName: selectedReservation.member?.memberName,
    reservationDate: selectedReservation.reservationDate,
    reservationTime: selectedReservation.reservationTime,
    reservationComm: selectedReservation.reservationComm
  };

  axios.put(
    `http://localhost:8080/reservation/${selectedReservation.reservationNo}`,
    flattenedData,
    { headers: { 'Content-Type': 'application/json' } } // Content-Type 설정 추가
  )
    .then((res) => {
      if (res.data.isSuccess) {
        toast.success("예약 정보 수정 성공!");
        setIsEditing(false); // update 모드 종료
        setShowDetailModal(false); // update 모달 닫기
        fetchReservation(); // 리로딩 후 최신 데이터 불러옴
      }
    })
    .catch((error) => {
      toast.error("수정 중 오류가 발생했습니다.");
      console.error("Error:", error);
    });
};

  // 상세보기 모달에서 입력값 변경 시 상태 업데이트
  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    
    setSelectedReservation((prevReservation) => {
        // 중첩된 객체 업데이트 처리
        if (name === 'serviceName') {
            return {
                ...prevReservation,
                service: {
                    ...prevReservation.service,
                    serviceName: value,
                },
            };
        }
        if (name === 'customerName') {
            return {
                ...prevReservation,
                customer: {
                    ...prevReservation.customer,
                    customerName: value,
                },
            };
        }
        if (name === 'memberName') {
            return {
                ...prevReservation,
                member: {
                    ...prevReservation.member,
                    memberName: value,
                },
            };
        }
        // 그 외 다른 필드는 단순히 업데이트
        return {
            ...prevReservation,
            [name]: value,
        };
    });
};

  // deleteprocess
  const handleDelete = () => {
    if (setShowDeleteModal) {
      axios.delete(`http://localhost:8080/reservation/${selectedReservation.reservationNo}`)
        .then((res) => {
          if (res.data.isSuccess) {
            toast.success("서비스 삭제 성공!");
            setShowDeleteModal(false); // 삭제 모달 닫기
            setShowDetailModal(false); // 상세보기 모달 닫기
            fetchReservation(); // 리로딩 후 최신 데이터 불러옴
          }
        })
        .catch((error) => {
          toast.error("삭제 중 오류가 발생했습니다.");
          console.error("Error deleting reservation:", error);
        });
    }
  };

  return (
    <div className="App">
      <h2>Reservation List</h2>

      <ToastContainer />
      <ReservationList 
        reservations={reservations} // 서비스 목록 데이터를 전달
        handleDetail={handleDetail} // 서비스 상세 보기 이벤트를 처리하는 함수
        fetchReservations={fetchReservation}  //서비스를 가져오는 함수
        setShowModal={setShowModal} //모달 창을 열기 위한 상태 설정 함수
      />
      
      {showModal && <CreateReservation //showModal이 true일 경우 새 서비스 생성 모달보기
        handleChange={handleChange} // 입력값 변경을 처리
        handleInsert={handleInsert} // 새 서비스를 추가
        setShowModal={setShowModal} // 모달을 닫을 때 사용
        />
      }

{showDetailModal && selectedReservation && (
  <ReservationDetail
    isEditing={isEditing}
    selectedReservation={selectedReservation}  // selectedReservation을 props로 전달
    handleDetailChange={handleDetailChange}
    handleSave={handleSave}
    handleEdit={handleEdit}
    setShowDetailModal={setShowDetailModal}
    setShowDeleteModal={setShowDeleteModal}
  />
)}

      {showDeleteModal && (
        <ReservationDelete
          selectedService={selectedReservation}
          handleDelete={handleDelete} // 삭제 작업을 처리
          setShowDeleteModal={setShowDeleteModal} // 삭제 모달을 닫는 함수
        />
      )}
    </div>
  );
}

export default App;