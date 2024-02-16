import React, { useEffect } from 'react'
import RenderPortfolio from '../portfolioImages/RenderPortfolio'
import "./landing.css"

const Landing = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
    
  },[])

  return (
    <div className='landing'> 
      <h1>Juwan Dinkins <span> Creative Lead </span></h1>  
      <RenderPortfolio />
      <div>© 2022</div>
    </div>
  )
}

export default Landing