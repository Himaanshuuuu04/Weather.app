import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UserContextProvider from "./components/Context/UserContextProvider";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>
);
