import React from "react";
import Board from "components/board";
import Tasks from "components/tasks";
import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";

const ProjectScreen = () => {
  return (
    <div>
      <Link to="tasks">任务组</Link>
      {/*
       * 前面不能有 slash，否则就是从跟根路径从头开始
       */}
      <Link to="board">看板</Link>
      <div>Project screen</div>

      <Routes>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="*" element={<RedirectToBoard />} />
        {/* 上面的问题可以直接使用 switch 来解决 */}
      </Routes>
    </div>
  );
};

// 用下面的 这个 component 来完成没有匹配的时候的 跳转
const RedirectToBoard = () => {
  return <Navigate to="board" />;
};

export default ProjectScreen;
