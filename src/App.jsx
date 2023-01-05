import { useState,useEffect } from 'react'
import Navigation from './Navigation'
import Card from './Card'

function App() {

  const [data, setData] = useState('');
  useEffect(()=>{
    fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin')
    .then( response => response.json() )
    .then( data => setData(data));
  },[])
  console.log(data)
  const cards = data.map( item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Navigation />
      <div className="main">
        {cards}
      </div>
    </div>
  )
}

export default App
