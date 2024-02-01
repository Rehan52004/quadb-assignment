import React from "react";
import ReactDOM from "react-dom/client";

//routing file for all pages
import App from "./App.jsx";

//react router
import { BrowserRouter } from "react-router-dom";

//bootstrap file
import "bootstrap/dist/css/bootstrap.min.css";

//custom app.css
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
