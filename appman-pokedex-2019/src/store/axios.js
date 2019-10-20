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
export default instance;
