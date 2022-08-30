import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProjectListScreen } from "screen/project-list";
// 登录界面
import { Login } from "authenticationProcess/Login";
// 注册界面
import { Register } from "authenticationProcess/Register";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ProjectListScreen></ProjectListScreen> */}
    {/* <Login></Login> */}
    <Register></Register>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
