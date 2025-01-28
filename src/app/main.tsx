import { store } from "@/app/store";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

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
