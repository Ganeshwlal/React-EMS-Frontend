import React from 'react'
import './Edit.css'
import { Button, Card, Form, Row } from 'react-bootstrap'
import Select from 'react-select'

function Edit() {
  
  const option=[
    {value:'Active', label:'Active'},
    {value:'InActive', label:'InActive'}
  ]



  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mt-3">Edit Employee Details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className="text-center">
            <img className='p-1  border rounded-circle' width={'50px'} height={'50px'} src="https://i.postimg.cc/c13R4thh/corporate-user-icon.png" alt="" />

          </div>

          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='fname' placeholder="First Nmae" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='lname' placeholder="Last Nmae" />
              </Form.Group>
              

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicemail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Email Address" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" name='mobile' placeholder="Mobile number" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
                <Form.Label>Select Gender</Form.Label>
                <Form.Check
                  type={'radio'}
                  label={`Male`}
                  name='gender'
                  value={'Male'}
                />

                <Form.Check
                  type={'radio'}
                  label={`Female`}
                  name='gender'
                  value={'Female'}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
                <Form.Label>Select Employee Status</Form.Label>
                <Select options={option}></Select>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclphotpo">
                <Form.Label>Choose Profile</Form.Label>
                <Form.Control type="file" name='profile'/>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclocation">
                <Form.Label>Employee Location</Form.Label>
                <Form.Control type="text" name='location' placeholder="Employee Location" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclocation">
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control type="date" name='location' placeholder="Employee Location" />
              </Form.Group>



              <Button type='submit' variant="primary">Submit</Button>




            </Row>
          </Form>
        </Card>
      </div>
    </>
  )
}

export default Edit