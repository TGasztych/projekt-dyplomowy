import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import configureAxios from "./configuration/AxiosConfiguration";

configureAxios()
ReactDOM.render(
		<React.StrictMode>
			<App/>
		</React.StrictMode>,
		document.getElementById('root'),
);
