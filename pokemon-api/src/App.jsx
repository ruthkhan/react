import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [pokelist, setPokelist] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(response => {
      // not the actual JSON response body but the entire HTTP response
        return response.data
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
