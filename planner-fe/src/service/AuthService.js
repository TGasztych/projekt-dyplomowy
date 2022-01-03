import axios from "axios";

class AuthService {
    login(username, password) {
        return axios
            .post("/api/auth", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken && response.data.refreshToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    refresh() {
        const refreshToken = this.getCurrentUser().refreshToken;
        return axios
            .post("/api/auth/refresh", { refreshToken })
            .then(response => {
                if (response.data.accessToken && response.data.refreshToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    isLoggedUser() {
        return !!localStorage.getItem('user');
    }

}

export default new AuthService();