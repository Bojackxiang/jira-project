import "./App.css";

import { LoginScreen } from "screens/login";
import { RegisterScreen } from "screens/register";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import { useDocumentTitle } from "utils";

function App() {
  const {} = useAuth();

  // 需要更新的页面标签名称
  useDocumentTitle("主页面", false);

  return (
    <div className="App">
      <LoginScreen />
      <RegisterScreen />
      <ProjectListScreen />
    </div>
  );
}

export default App;
