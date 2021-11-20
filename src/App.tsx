import "./App.css";

import { LoginScreen } from "screens/login";
import { RegisterScreen } from "screens/register";
import { useAuth } from "context/auth-context";

function App() {
  const {} = useAuth();
  return (
    <div className="App">
      <LoginScreen />
      <RegisterScreen />
    </div>
  );
}

export default App;
