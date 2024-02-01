import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

//pages
import ShowDetails from "./pages/ShowDetails";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/show/:id" element={<ShowDetails />} />
				</Routes>
			</Header>
		</>
	);
}

export default App;
