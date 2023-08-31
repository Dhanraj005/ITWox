import React from 'react'
import { useNavigate } from "react-router-dom";


const Error = () => {

  const history = useNavigate()

  return (
    <>
    <div className='container flex flex-col'>
        <div className='error d-flex flex-coloum justify-conent-lg-center align-items-center'>
            <img src='./error.jpg' alt='error' style={{width:400}} className='errImg'/>
            <h1> 404 page not found</h1>
            <button className='btn btn-primary' onClick={()=>history('/')}>Go to Logine</button>

        </div>

    </div>
    
    
    </>
  )
}

export default Error