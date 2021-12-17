import './App.css';
import Users from '../user/Users';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../home/Home';
import ApplicationNavbar from '../navbar/ApplicationNavbar';
import AccountEventTypes from '../account/AccountEventTypes';
import AccountEvents from '../account/AccountEvents';
import Analysis from '../account/Analysis';


function App() {
	return (
			<div className="App">
				<BrowserRouter>
					<ApplicationNavbar/>
					<Routes>

						<Route path="/" element={<Home />} />
						<Route path="users" element={<Users />} />
						<Route path="account-events/types" element={<AccountEventTypes />} />
						<Route path="account-events" element={<AccountEvents />} />

						<Route path="analysis" element={<Analysis />} />

						<Route path="account-events/:eventId" element={<Analysis />} />

					</Routes>
				</BrowserRouter>
			</div>
	);
}

export default App;
