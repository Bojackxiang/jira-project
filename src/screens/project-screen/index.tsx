import React from "react";
import Board from "components/board";
import Tasks from "components/tasks";
import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const ProjectScreen = () => {
  return (
    <div>
      <Link to="tasks">任务组</Link>
      {/*
       * 前面不能有 slash，否则就是从跟根路径从头开始
       */}
      <Link to="board">看板</Link>
      <Routes>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/board" element={<Board />}></Route>
        {/* <Navigate to={`${window.location.pathname}/board`} /> */}
      </Routes>
      Project screen
    </div>
  );
};

export default ProjectScreen;
