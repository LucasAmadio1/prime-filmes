import { useEffect, useState } from "react"
import { api } from "../../services/api"

// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=c70192348765194da64b6af0596492f2&language=pt-BR

export function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: 'c70192348765194da64b6af0596492f2',
                    lang: 'pt-BR',
                    page: 1,
                }
            })

            console.log(response.data.results)
        }

        loadFilmes()    
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}