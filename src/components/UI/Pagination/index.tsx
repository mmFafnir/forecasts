"use client";

import React from "react";
import styles from "./pagination.module.scss";

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <button className="show-more-btn">
        <span>Показать еще</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="11"
          viewBox="0 0 8 11"
          fill="none"
        >
          <path
            d="M3.64645 10.8536C3.84171 11.0488 4.15829 11.0488 4.35355 10.8536L7.53553 7.67157C7.7308 7.47631 7.7308 7.15973 7.53553 6.96447C7.34027 6.7692 7.02369 6.7692 6.82843 6.96447L4 9.79289L1.17157 6.96447C0.976311 6.7692 0.659729 6.7692 0.464466 6.96447C0.269204 7.15973 0.269204 7.47631 0.464466 7.67157L3.64645 10.8536ZM3.5 0.5L3.5 10.5L4.5 10.5L4.5 0.5L3.5 0.5Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
