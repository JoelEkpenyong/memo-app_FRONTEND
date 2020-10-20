import Axios from 'axios'

export const axios = Axios.create({baseURL: "https://checkme-backend.herokuapp.com/auth"})

