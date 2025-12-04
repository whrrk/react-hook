import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthProvider from "./lessons/Lesson4/provider/AuthProvider.tsx";

//https://ja.react.dev/reference/react/useState#updating-state-based-on-the-previous-state

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
