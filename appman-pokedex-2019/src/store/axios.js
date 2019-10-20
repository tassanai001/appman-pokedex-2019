import axios from "axios";

const BASE_URL = "http://localhost:3000";

const headers = {
  "Content-Type": "application/json",
  Authorization: ""
};

const instance = axios.create({
  baseURL: BASE_URL,
  headers
});

const updateToKEN = () => {
  const TOKEN = localStorage.getItem("TOKEN");
  Object.assign(instance.defaults, { headers: { authorization: TOKEN } });
};
export default {
  instance,
  updateToKEN: updateToKEN
};
