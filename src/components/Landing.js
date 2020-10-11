import React from 'react'
import {Link} from 'react-router-dom'

import './Landing.css'

const Landing = () => {
  return (
    <div className="wrapper">
      <section id="hero" className="d-flex flex-column align-items-center justify-content-center">
        <svg className="mt-5" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="10" fill="#2D9CDB" />
          <rect x="6" y="6.00002" width="48" height="48" rx="10" fill="#56CCF2" />
          <path d="M18 26.864L27.9574 36.7702L42 22.8" stroke="#F2F2F2" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="pt-3">checkme</h3>
        <p className="w-50 text-center py-5">The easiest way to Organise, Track and be productive on all your tasks</p>
        <div className="hero_btn">
          <button className="btn btn_secondary mx-3">Support our cause</button>
          <Link to="/login" className="btn btn_primary mx-3">Start checking</Link>
          </div>
      </section>
    </div>
    
  )
}

export default Landing
