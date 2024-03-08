import React from 'react'
import NavBar from '../NavBar/NavBar'
import CartContainer from '../Cart/CartContainer'
import { useGlobalContext } from '../../Hooks/context'

function Home() {
  const{loading}=useGlobalContext()

  if(loading){
    return(
      <div className='loading'>
        <h1>Loading</h1>
      </div>
    )
  }

  return (
    <main>
        <NavBar/>
        <CartContainer/>
    </main>
  )
}

export default Home
