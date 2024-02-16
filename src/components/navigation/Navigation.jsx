import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navigation = ({setDisplayNav, displayNav}) => {

  return (
    <div className='nav'>
        <div className='hamburger'>
            <GiHamburgerMenu onClick={()=>setDisplayNav(!displayNav)} />
        </div>
        {
            displayNav ? 
            <header>
                <nav className='nav_bar'>
                    <ul className={ !displayNav ? 'active' : 'nav_links'}>
                        <Link onClick={()=>setDisplayNav(!displayNav)} to='/'><li>Portfolio</li></Link>
                        <Link onClick={()=>setDisplayNav(!displayNav)} to='/about'><li>About</li></Link>
                    </ul>
                </nav>
            </header>
            :
            undefined
        }
    </div>
  )
}


export default Navigation