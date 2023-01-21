import axios from "axios";


const request = axios.create({
    baseURL:'http://localhost:4545/api/v1'
})

export {request}