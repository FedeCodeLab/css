import "./nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<header>
			<div className="container">
				<h1>Header</h1>
				<nav>
					<ul>
						<Link to="/">
							<li>Home</li>
						</Link>
						<Link to="/contact">
							<li>Contact us</li>
						</Link>
						<Link to="/create">
							<li>Create</li>
						</Link>
						<Link to="/random">
							<li>Random</li>
						</Link>
					</ul>
				</nav>
			</div>
		</header>
	);
}
