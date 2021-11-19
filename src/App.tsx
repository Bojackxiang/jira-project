import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProjectListScreen } from "screens/project-list";
import { LoginScreen } from "screens/login";
import { RegisterScreen } from "screens/register";

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      <LoginScreen />
      <RegisterScreen />
    </div>
  );
}

export default App;
