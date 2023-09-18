import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [pokelist, setPokelist] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(response => {
      // not the actual JSON response body but the entire HTTP response
      return response.json()
      }).then(response => {
      // we now run another promise to parse the HTTP response into usable JSON
        setPokelist(response.results)
      }).catch(err=>{
      console.log(err)
      })
    }, [])
        
    return (
      <ul>
      {
        pokelist.map((poke) => 
          <li key={ poke.url }>{ poke.name }</li>
        )
      }
      </ul>
  )
}

export default App
