import React from "react";
import { useDispatch } from "react-redux";
import { useAsync } from "../../customized-hooks/useAsync";

const Board = () => {
  const dispath = useDispatch();

  useAsync();

  return <div>Board component</div>;
};

export default Board;
