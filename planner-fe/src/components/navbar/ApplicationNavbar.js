import {Link} from 'react-router-dom';

function ApplicationNavbar() {
	return (
			<nav>
				<div>
					<Link to="/">Strona domowa</Link>

					<div>
						<ul>
							<li>
								<Link to="/users">Users</Link>
							</li>
							<li>
								<Link to="/account-events/types">Typy zdarzeń</Link>
							</li>
							<li>
								<Link to="/account-events">Zdarzenia</Link>
							</li>
							<li>
								<Link to="/analysis">Analizy</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
	)
}

export default ApplicationNavbar;
