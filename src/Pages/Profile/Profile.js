import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Card,Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { viewUser } from '../../Services/allApi'
import { BASE_URL } from '../../Services/Base_url'



function Profile() {


  //get path parameter from asociated route
  const {id} = useParams()
  console.log(id);

  //state to hold user details
  const [userDetail,setUserDetail]=useState({})

 

  //get a particular user details api
  const userDetails = async()=>{
    const userData = await viewUser(id)
    setUserDetail(userData.data);
  }
  console.log(userDetail);

  useEffect(()=>{
    userDetails()
  },[])


  return (
    <>
      <div style={{height:'70vh'}} className="container">
        <Card className="shadow col-lg-6 mx-auto mt-5">
          <Card.Body>
            <Row>
              <div className="col">
                <div className="profile_img d-flex justify-content-center">
                <img className='p-1  border rounded-circle' width={'200px'} height={'200px'}
                 src={`${BASE_URL}/uploads/${userDetail.profile}`} alt="" />

                </div>
              </div>
            </Row>
            <div className="text-center mt-3">
              <h3>  {`${userDetail.fname} ${userDetail.lname}`}</h3>
              <h5><i className="fa-solid fa-envelope text-primary"></i> :-<span>{userDetail.email}</span></h5>
              <h5><i class="fa-solid fa-mobile text-primary"></i> :-<span> {userDetail.mobile}</span></h5>
              <h5><i class="fa-solid fa-venus-mars text-primary"></i> :-<span> {userDetail.gender}</span></h5>
              <h5><i class="fa-solid fa-location-dot text-primary"></i> :-<span> {userDetail.location}</span></h5>
              <h5><i class="fa-brands fa-creative-commons-by text-primary"></i> :-<span> {userDetail.status}</span></h5>
              <h5><i class="fa-solid fa-calendar-days text-primary"></i> :-<span> {userDetail.dob}</span></h5>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Profile