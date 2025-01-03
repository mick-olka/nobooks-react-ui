import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/app/store";

import App from "./App.tsx";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <AnimatePresence>
        <App />
        <Toaster />
      </AnimatePresence>
    </Provider>
  </BrowserRouter>,
);
