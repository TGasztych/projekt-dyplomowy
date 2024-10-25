import './App.css';
import Users from '../user/Users';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from '../home/Home';
import ApplicationNavbar from '../navbar/ApplicationNavbar';
import AccountEventTypes from '../account/AccountEventTypes';
import AccountEvents from '../account/AccountEvents';
import Analysis from '../account/Analysis';
import Login from "../login/Login"

import Register from "../login/Register"


import AuthService from "../../service/AuthService";




const PrivateRoute = ({ children }) => AuthService.isLoggedUser() ? children : <Navigate to="/login" />;

function App() {
	return (
			<div className="App">
				<BrowserRouter>
					<ApplicationNavbar/>
					<Routes>
						<Route path="login" element={<Login/>}/>
						<Route path="register" element={<Register/>}/>
						<Route path="users" element={<PrivateRoute><Users /></PrivateRoute>} />
						<Route path="account-events/types" element={<PrivateRoute><AccountEventTypes /></PrivateRoute>} />
						<Route path="account-events" element={<PrivateRoute><AccountEvents /></PrivateRoute>} />

						<Route path="analysis" element={<PrivateRoute><Analysis /></PrivateRoute>} />

						<Route path="account-events/:eventId" element={<PrivateRoute><Analysis /></PrivateRoute>} />
						<Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />

					</Routes>
				</BrowserRouter>
			</div>
	);
}

export default App;
