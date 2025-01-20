import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Replace with your API URL
});

export default apiClient;
