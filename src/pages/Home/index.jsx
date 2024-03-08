import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Link } from "react-router-dom"
import './style.css'

// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=c70192348765194da64b6af0596492f2&language=pt-BR

export function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: 'c70192348765194da64b6af0596492f2',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            setMovies(response.data.results.slice(0, 10))
            setLoading(false)
        }

        loadFilmes()    
    }, []) 

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="list-movies">
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            <Link to={`/filme/${movie.id}`} >Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}