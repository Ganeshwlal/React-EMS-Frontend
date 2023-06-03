import React from 'react'
import './Pagenf.css'
import { Link } from 'react-router-dom'


function Pagenf() {
  return (
    <div>
        <div className="container text-center">
            <h2>404</h2>
            <img style={{height:'60vh'}} src="https://i.postimg.cc/1z7b7SSX/404-error-dribbble-800x600.gif" alt="" />
            <br />
            <Link to={'/'}>
            <button className='btn btn-success' href='/'>Home</button>

            </Link>
        </div>
    </div>
  )
}

export default Pagenf