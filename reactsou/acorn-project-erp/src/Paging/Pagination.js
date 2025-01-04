import React from "react";
import styles from "../Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className={styles.pagination}>
      {/* 맨 처음으로 이동 버튼 */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(1)}
          className={`${styles.pageButton} ${currentPage === 1 && styles.disabled}`}
          disabled={currentPage === 1}
        >
          «
        </button>
      )}

      {/* 이전 페이지 이동 버튼 */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={`${styles.pageButton} ${currentPage === 1 && styles.disabled}`}
          disabled={currentPage === 1}
        >
          ‹
        </button>
      )}

      {/* 페이지 번호 버튼 */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`${styles.pageButton} ${currentPage === index + 1 ? styles.active : ""}`}
        >
          {index + 1}
        </button>
      ))}

      {/* 다음 페이지 이동 버튼 */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className={`${styles.pageButton} ${currentPage === totalPages && styles.disabled}`}
          disabled={currentPage === totalPages}
        >
          ›
        </button>
      )}

      {/* 맨 끝으로 이동 버튼 */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(totalPages)}
          className={`${styles.pageButton} ${currentPage === totalPages && styles.disabled}`}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      )}
    </div>
  );
}

export default Pagination;