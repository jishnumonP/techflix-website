import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'
const Header = () => {

  
  return (
    <div className="navbar">
  <div className="header">
    TECHFLIX

  </div>
  <div className="headerTitle">
  <h1 className='heading'>
    Techflix - Future is here
  </h1>
  <h2 className='headingType'><Typewriter
  options={{
    strings: ['Hi humans!!', 'Techflix is an open source platform for technology geeks!!'],
    autoStart: true,
    loop: true,
  }}
/></h2>
  </div>

  </div>
  )
}

export default Header