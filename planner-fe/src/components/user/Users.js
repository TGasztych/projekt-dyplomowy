import {useEffect, useState} from 'react';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';

function Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get('/api/users')
				.then((response) => {
					setUsers(response.data);
				}).catch(error => console.error('error'));
	}, []);

	return (
			<>
				<ul>
					{users.map(u => (
							<li key={u.id}>
								<a href={u.id}>{u.firstName}</a>
							</li>
					))}
				</ul>
				<h1>Dodaj użytkownika</h1>
				<Formik
						initialValues={{
							firstName: '',
							lastName: ''
						}}
						onSubmit={async (values) => {

							axios.post("/api/users", values)
									.then(res => setUsers([...users, res.data]))
						}}
				>
					<Form>
						<label htmlFor="firstName">Imie </label>
						<Field id="firstName" name="firstName" placeholder="Franek" />

						<label htmlFor="lastName">Nazwisko </label>
						<Field id="lastName" name="lastName" placeholder="Kowalski" />

						<button type="submit">Dodaj</button>
					</Form>
				</Formik>
			</>
	);
}

export default Users;
