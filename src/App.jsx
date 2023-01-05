import { useState,useEffect } from 'react'
import Navigation from './Navigation'
import Card from './Card'

function App() {

  const [data, setData] = useState('');
  useEffect(()=>{
    fetch('')
    .then( response => response.json() )
    .then( data => setData(data));
  },[])

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
