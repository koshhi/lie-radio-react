import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <Link to='/'><img src="/static/images/logo-yellow.svg" alt="lie"></img></Link>
      <ul>
        <li><Link to='/programs'>Programas</Link></li>
        <li><Link to='/residents'>Residentes</Link></li>
        <li><Link to='/specials'>Especiales</Link></li>
        <li><Link to='/about'>Sobre Nosotros</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header