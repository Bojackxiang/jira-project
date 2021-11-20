import "./App.css";

import { LoginScreen } from "screens/login";
import { RegisterScreen } from "screens/register";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";

function App() {
  const {} = useAuth();
  return (
    <div className="App">
      <LoginScreen />
      <RegisterScreen />
      <ProjectListScreen />
    </div>
  );
}

export default App;
