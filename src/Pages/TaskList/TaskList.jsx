import React from "react";
import SingleTask from "../../components/SingleTask";

// add task button
// task list

function topAddButton() {
  return (
    <div className="my-2 text-end">
      <button className="btn btn-primary">
        <i className="bi bi-plus"></i>
        <span>Add</span>
      </button>
    </div>
  );
}

function getTaskList() {
  const tasks = [];
  for (let i = 1; i <= 5; i++) {
    tasks.push(<SingleTask key={i} taskId={i} />);
  }
  return tasks;
}

const TaskList = () => {
  return (
    <div className="container m-4">
      {topAddButton()}
      {getTaskList()}
    </div>
  );
};

export default TaskList;
