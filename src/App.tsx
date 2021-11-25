import "./App.css";

import { LoginScreen } from "screens/login";
import { RegisterScreen } from "screens/register";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import { useDocumentTitle } from "utils";
import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import ProjectScreen from "screens/project-screen";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import {
  projectListActions,
  selectProjectModelState,
} from "store/loadingState";

function App() {
  const {} = useAuth();
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectProjectModelState);
  console.log(isModalOpen);
  // 需要更新的页面标签名称
  useDocumentTitle("主页面", false);

  return (
    <div className="App">
      <Button onClick={() => dispatch(projectListActions.openLoadingModal())}>
        {" "}
        toggle loading{" "}
      </Button>
      <Routes>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/register" element={<RegisterScreen />}></Route>
        <Route path="/projects" element={<ProjectListScreen />}></Route>
        {/*
         * 上面的 route 如果检测到里面有link，直接就回在后面添加 /id，
         * 那么我们就理所应当的跳转到了 project/{id}, 也就是下面的页面
         */}
        <Route
          path="/projects/:projectId/*"
          element={<ProjectScreen />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
