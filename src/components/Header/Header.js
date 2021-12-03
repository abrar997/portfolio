import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <div>
        <Link to="/Resume"> Resume</Link>
        <Link to="/Portfolio"> Portfolio</Link>
      </div>
    );
}

export default Header
