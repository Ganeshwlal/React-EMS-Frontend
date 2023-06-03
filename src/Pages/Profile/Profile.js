import React from 'react'
import './Profile.css'
import { Card,Row } from 'react-bootstrap'



function Profile() {
  return (
    <>
      <div className="container">
        <Card className="shadow col-lg-6 mx-auto mt-5">
          <Card.Body>
            <Row>
              <div className="col">
                <div className="profile_img d-flex justify-content-center">
                <img className='p-1  border rounded-circle' width={'200px'} height={'200px'} src="https://i.postimg.cc/c13R4thh/corporate-user-icon.png" alt="" />

                </div>
              </div>
            </Row>
            <div className="text-center mt-3">
              <h3>  Ganesh w lal</h3>
              <h5><i className="fa-solid fa-envelope text-primary"></i> :-<span> ganesh@gmail.com</span></h5>
              <h5><i class="fa-solid fa-mobile text-primary"></i> :-<span> 7558075562</span></h5>
              <h5><i class="fa-solid fa-venus-mars text-primary"></i> :-<span> Male</span></h5>
              <h5><i class="fa-solid fa-location-dot text-primary"></i> :-<span> Kayamkulam</span></h5>
              <h5><i class="fa-brands fa-creative-commons-by text-primary"></i> :-<span> Active</span></h5>
              <h5><i class="fa-solid fa-calendar-days text-primary"></i> :-<span> 04-08-1997</span></h5>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Profile