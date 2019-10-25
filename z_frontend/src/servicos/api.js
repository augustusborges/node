import axios from "axios";

const api = axios.create({ base_url: "localhost:2005/api" });

export default api;
