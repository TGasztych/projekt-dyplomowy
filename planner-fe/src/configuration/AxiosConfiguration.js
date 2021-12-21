import axios from "axios";
import AuthService from "../service/AuthService";

const configureAxios = () => {
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if(error.response.status === 403) {
            return AuthService.refresh()
                .then(() => Promise.resolve(axios(error.config)));
        }
        return Promise.reject(error);
    });
}

export default configureAxios;