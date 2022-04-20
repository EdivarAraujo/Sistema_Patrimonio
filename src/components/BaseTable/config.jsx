import React from "react";
import './style.css';

export const styles = {
  headCells: {
      style: {
          fontWeight:'bold',
          fontSize:'14px',
      },
  },
};

export const NoData = () => {
  return (
    <div className="containerLoaderDataTable">
    <span id="empty-list-text">{'Nenhum resultado encontrado'}</span>
  </div>
  )
}
