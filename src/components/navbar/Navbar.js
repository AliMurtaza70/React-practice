import React from 'react';
import './navbar.css'

const socialLinks = [
  {id:1, name:'Home'},
  {id:2, name:'About'},
  {id:3, name:'Menu'},
  {id:4, name:'Pages'},
  {id:5, name:'Contact'},
]

export default function Navbar() {
  return (
      <nav>
        <div className="container">
          <div className="nav-content">
            <img src="/images/Logo.png" alt="Logo" />
            <ul className="social-links">
            {socialLinks.map((link)=> (
              <li className='social-link' key={link.id}>{link.name}</li>
            ))}
            </ul>
            <button>Book A Table</button>
          </div>
          </div>        
      </nav>
  )
}