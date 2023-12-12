import axios from 'axios'

const baseURL = axios.create({baseURL: 'http://192.168.1.5:8000'})

export default baseURL