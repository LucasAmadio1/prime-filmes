import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { toast } from 'react-toastify'

export function Favoritos() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeFlix");
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function handleDeleteMovie(id) {
      let filtroFilmes = filmes.filter( (item) => {
        return (item.id !== id)
      })

        setFilmes(filtroFilmes)
        localStorage.setItem('@primeFlix', JSON.stringify(filtroFilmes) )
        toast.success("Filme removido com sucesso!")
    }   

    return (
        <div className="meus-filmes">
          <h1>Meus filmes</h1>

          {filmes.length === 0 && (
            <span>Você não possui nenhum filme salvo 😭</span>
          )}

          <ul>
            {filmes.map((item) => {
               return(
                 <li key={item.id}>
                   <span>{item.title}</span>

                   <div>
                     <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                     <button onClick={() => handleDeleteMovie(item.id)}>Excluir</button>
                   </div>
                 </li>
                ) 
                })}
            </ul>
        </div>
    )
}