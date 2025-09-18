import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const domElement = document.getElementById("root");

if (domElement) {
	createRoot(domElement).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
