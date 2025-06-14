import { useEffect, useState } from 'react'
import './App.css'
import MainPage from './Containers/MainPage'


function App() {
  const [pokeData, setPokeData] = useState<String>("")
  const [isLoading, setIsLoading] = useState(true)

  const getPokeData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1')
    const data = await response.json()
    return data
  }
  
  useEffect(() => {
    getPokeData().then((pokeData) => {
      console.log('Fetched Pokémon data:', pokeData)
      console.log('Fetched Pokémon data:', pokeData.results[0].name)
      setPokeData(pokeData.results[0].name)      
      setIsLoading(false)
    })
    .catch((error) => {
      console.error('Error fetching Pokémon data:', error)
    })
  }, [])



  return (
    isLoading ? <h1>Loading...</h1> : <MainPage pokeData={pokeData}/>
  )
}

export default App
