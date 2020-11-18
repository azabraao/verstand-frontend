import axios from "axios";

const api = axios.create({
  baseURL: "https://cative-dsrpt21.herokuapp.com",
});

export default api;

