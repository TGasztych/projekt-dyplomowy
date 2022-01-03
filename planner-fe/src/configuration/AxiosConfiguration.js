import axios from "axios";
import AuthService from "../service/AuthService";

const configureAxios = () => {
    axios.interceptors.response.use((response) => response, function (error) {
        if (error.response.status === 403) {
            return AuthService.refresh()
                .then((authentication) => {
                    error.config.headers.Authorization = "Bearer " + authentication.accessToken
                    console.log(error.config)
                    return Promise.resolve(axios(error.config))
                });
        }
        return Promise.reject(error);
    });

    axios.interceptors.request.use(function (request) {
        const token = AuthService.getCurrentUser()?.accessToken;
        if (token) {
            request.headers.Authorization = "Bearer " + AuthService.getCurrentUser().accessToken
        }
        return request;
    }, (error) => Promise.reject(error));
}

export default configureAxios;