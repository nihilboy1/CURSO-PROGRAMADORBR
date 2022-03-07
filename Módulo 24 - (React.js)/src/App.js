import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Counter from "./components/Counter"

function App() {
  const [show, set_show] = useState(true)

  let time = 0


  useEffect(() => {
    let timer = setInterval(() => {
      time ++
      console.log(time)
      if (time > 4) {
        clearInterval(timer)
        set_show(false)
      }
    }, 1000)
  }, [])

  if (show) {
    return (
      <>
      <Header name="Site" links={["Sobre", "Comprar", "Contato"]}>
      </Header>
      <Counter count={5}>
      </Counter>
      </>
    )
  }
  else {
    return (
      <div>
        Sem contador
      </div>
    )
      
  }
 
}

export default App;
