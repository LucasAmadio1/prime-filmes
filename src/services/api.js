import axios from 'axios'

// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=c70192348765194da64b6af0596492f2&language=pt-BR

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})