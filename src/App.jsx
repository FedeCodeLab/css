//  ? ---------------------- Hooks

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

//  ? ---------------------- components

import "./App.css";
import Contact from "./views/contact/Contact";
import Create from "./views/create/Create";
import Nav from "./components/nav/Nav";
import Random from "./views/random/Random";

function App() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	return (
		<main>
			<Nav />
			<div className="container">
				<Routes>
					<Route path="/create" element={<Create />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/random" element={<Random />} />
				</Routes>
			</div>
		</main>
	);
}

export default App;
