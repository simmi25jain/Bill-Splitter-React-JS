import axios from "axios";
//axios-middleware for interaction between frontend and backend.

const Instance=axios.create({
    baseURL:"https://inventory-management-i3zd.onrender.com",
    


})
export default Instance;
