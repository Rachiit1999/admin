import axios from "axios";

const BASE_API_URL = "http://172.20.10.5:5000/api/";
export const services = {
  user: {
    getApplicants: () => axios.get(`${BASE_API_URL}user/read`),
    login: (payload) => axios.post(`${BASE_API_URL}user/login`, payload),
    register: (payload) => axios.post(`${BASE_API_URL}user/add`, payload),
    approve: (param) => axios.get(`${BASE_API_URL}user/approve/${param}`),
  },
  storage: {
    get: (key) => JSON.parse(window.localStorage.getItem(key)),
    set: (key, value) =>
      window.localStorage.setItem(
        key,
        typeof value === "object" ? JSON.stringify(value) : value
      ),
    clear: () => window.localStorage.clear(),
  },
};
