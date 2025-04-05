// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserContext } from "./userContext";

// const initialUserValue = {
//   username: "Mango",
//   isLoggedIn: true,
// };

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <UserContext value={initialUserValue}>
//     <App />
//   </UserContext>
// );

import { UserProvider } from "./UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
