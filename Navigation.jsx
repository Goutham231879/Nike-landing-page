import React from 'react'

export default function Navigation() {
  return (
    <nav className="nav"> 

      <img src="./images/nike.png" height={50} width={100} alt="nikelogo" />

        <ul >
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button>Login</button>

      </nav>
  )
}


