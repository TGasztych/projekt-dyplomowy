import {Formik, Field, Form} from 'formik';
import {useNavigate} from "react-router-dom";
import AuthService from "../../service/AuthService";

function Login() {
    let navigate  = useNavigate();

    const onSubmit = async (values) => {
        AuthService.login(values.username, values.password)
            .then(r => navigate(`/`))
    }

    return (
        <>
            <h1>Zaloguj się</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={onSubmit}
            >
                <Form>
                    <label htmlFor="username">Login </label>
                    <Field id="username" name="username" placeholder="staszek2137"/>

                    <label htmlFor="password">Hasło </label>
                    <Field type="password" id="password" name="password" placeholder="*** *****"/>

                    <button type="submit">Zaloguj</button>
                </Form>
            </Formik>
        </>
    );
}

export default Login;
