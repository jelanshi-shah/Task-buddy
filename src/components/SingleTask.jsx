import React from "react";

function getFormattedDate() {
  const date = new Date();
  const formattedTimeStr = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()} : ${date.getMinutes()}`;
  return formattedTimeStr;
}

const SingleTask = ({taskId}) => {
  return (
    <div className="row border rounded my-2 align-items-center">
      <div className="col-10 ps-0 pe-0">
        <div className="p-3">
          <div className="d-flex align-items-center mb-2">
            <span className="badge bg-primary me-2">{taskId}</span>
            <h5 className="mb-0">Title</h5>
          </div>
          <p className="text-dark mb-2">Description</p>
          <p className="text-small mb-0">{getFormattedDate()}</p>
        </div>
      </div>
      <div className="col-2 col-md-1 offset-md-1 d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column gap-2">
          <button className="btn btn-warning">
            <i className="bi bi-pencil text-white"></i>
          </button>
          <button className="btn btn-danger">
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
