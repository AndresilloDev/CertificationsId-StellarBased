import api from "./base.api";

export const login = async ({email, password}) => {
    return await api.post("/auth/login", { email, password });
    
};

export const register = async (userData) => {
    return await api.post("/auth/register", userData);
}