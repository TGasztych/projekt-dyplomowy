import {Formik, Field, Form} from 'formik';
//import {useHistory} from "react-router-dom";
import {Link, useNavigate} from "react-router-dom";
import AuthService from "../../service/AuthService";

//import createUser from "../../service/UserService";
import {useEffect, useState} from "react";
import axios from "axios";

//TODO clean up

function Register() {
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
            <h3>albo <Link to="/login">Zaloguj się</Link></h3>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    username: '',
                    password: ''
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





                    <label htmlFor="username">Nazwisko </label>
                    <Field id="username" name="username" placeholder="username"/>

                    <label htmlFor="password">Nazwisko </label>
                    <Field id="password" name="password" placeholder="password" type="password" />

                    <button type="submit">Dodaj</button>
                </Form>
            </Formik>
        </>
    );
}

export default Register;

