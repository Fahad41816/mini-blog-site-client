import axios from "axios"



const Axios = axios.create({
    baseURL:"https://mini-blogsite-api.onrender.com/"
})

export default Axios