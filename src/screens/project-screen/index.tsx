import React from "react";
import { Link } from "react-router-dom";

const ProjectScreen = () => {
  return (
    <div>
      <Link to="tasks">任务组</Link>
      <Link to="board">看板</Link>
      Project screen
    </div>
  );
};

export default ProjectScreen;
