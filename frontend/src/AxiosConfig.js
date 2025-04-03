import axios from "axios";
//axios-middleware for interaction between frontend and backend.

const Instance = axios.create({
  baseURL: `https://bill-splitter-react-js.onrender.com`,
});
export default Instance;