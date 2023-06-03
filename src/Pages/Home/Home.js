import React from 'react'
import './Home.css'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Hometable from '../../Components/HomeTable/Hometable'




function Home() {

  const navigate = useNavigate()

  //to navigate to register page when button clicked
  const adduser =()=>{
    navigate('/register')
  }

  return (
    <>
      <div className="container mt-5">
        <div className="main_div">
          <div className="search_Add d-flex justify-content-between">
            <div className="search col-md-4">
              <Form className='d-flex'>
                <Form.Control className='me-2' type="text" placeholder="Search" />
                <Button className='btn btn-success'>Search</Button>
              </Form>
            </div>

            <div className="add_btn">
            <Button onClick={adduser}  className='btn btn-primary'> <i className="fa-solid fa-user-plus"></i> Add</Button>

            </div>
          </div>
        </div>

        <div className="second_div">
          <Hometable/>
        </div>

      </div>
    </>
  )
}

export default Home