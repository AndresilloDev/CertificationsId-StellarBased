import api from "./base.api";

export { api };

export const login = ({email, password}) => {
    return api.post("/auth/login", { email, password });
};

export const register = (userData) => {
    return api.post("/auth/register", userData);
}