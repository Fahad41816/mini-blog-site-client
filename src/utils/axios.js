import axios from "axios"



const Axios = axios.create({
    baseURL:"https://mini-blog-site-server.onrender.com"
})

export default Axios