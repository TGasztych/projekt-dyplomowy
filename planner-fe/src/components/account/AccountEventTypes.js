import {useEffect, useState} from 'react';
import axios from 'axios';
import {Field, Form, Formik} from 'formik';
import {Switch} from 'react-router-dom';




const AccountEventTypes = () => {

	const [types, setTypes] = useState([])

	useEffect(() => {
		axios.get("/api/account-events/types").then((res) => setTypes(res.data))
	}, [])



	return (
			<>
				<ul>
					{types.map(t => (
							<li key={t.id}>
								<a href={t.id}>{t.name} {t.isRecurring ? 'Powtarzalny' : ''}</a>
							</li>
					))}
				</ul>




				<h1>Dodaj typ zdarzenia</h1>
				<Formik
						initialValues={{
							name: '',
							isRecurring: false
						}}
						onSubmit={async (values) => {

							axios.post("/api/account-events/types", values)
									.then(res => setTypes([...types, res.data]))
						}}
				>
					<Form>
						<label htmlFor="name">Nazwa typu</label>
						<Field id="name" name="name" placeholder="Rachunki" />
						<label htmlFor="isRecurring">Czy powtarzalny</label>
						<Field type="checkbox" id="isRecurring" name="isRecurring" />

						<button type="submit">Dodaj</button>
					</Form>
				</Formik>
			</>
	)
}

export default AccountEventTypes;
