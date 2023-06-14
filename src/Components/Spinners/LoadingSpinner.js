import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <>
        <div className='d-flex justify-content-center'>   
           <Spinner animation="border" variant="warning" />
        <br />
        <p>Loading...</p>
        </div>
    </>
  )
}

export default LoadingSpinner