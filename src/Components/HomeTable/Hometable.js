import React from 'react'
import './Hometable.css'
import { Badge, Card, Col, Dropdown, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../Services/Base_url';





function Hometable({ displayData, deleteUser }) {
    console.log(displayData);
    return (
        <>

            <div className="container mt-5">
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <Table className='align-items-center' responsive="sm">
                                <thead className='thead-dark'>
                                    <tr className='table-dark'>
                                        <th>ID</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>DOB</th>
                                        <th>Gender</th>
                                        <th>Status</th>
                                        <th>Profile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>


                                    {
                                        displayData.length > 0 ? displayData.map((item, index) => (
                                            <tr>
                                                <td>{index + 100}</td>
                                                <td>{item.fname} {item.lname}</td>
                                                <td>{item.email}</td>
                                                <td>{item.dob}</td>
                                                <td>{item.gender}</td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant={item.status==='Active'?'primary':'danger'} id="dropdown-basic">
                                                            {/* <Badge bg={item.status==='Active'?'primary':'danger'}>   */}
                                                                {item.status}
                                                            {/* </Badge> */}
                                                        </Dropdown.Toggle>

                                                       
                                                    </Dropdown>
                                                </td>
                                                <td>
                                                    <img className='rounded' width={'30px'} height={'30px'} 
                                                    src={`${BASE_URL}/uploads/${item.profile}`} alt="" />
                                                </td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="light" id="dropdown-basic1">
                                                            {/* <Badge> */}
                                                                {/* Action */}
                                                            {/* </Badge> */}
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item ><Link to={`/profile/${item._id}`} className='text-decoration-none'>
                                                                <i className="fa-solid fa-eye text-primary me-2 fs-6"></i>
                                                                <span className=' text-dark'>View</span>
                                                            </Link></Dropdown.Item>
                                                            <Dropdown.Item ><Link to={`/edit/${item._id}`} className='text-decoration-none'>
                                                                <i className="fa-solid fa-pen text-danger me-2 fs-6"></i>
                                                                <span className=' text-dark'>Edit</span>
                                                            </Link></Dropdown.Item>
                                                            <Dropdown.Item >
                                                                <div onClick={()=>deleteUser(item._id)}>
                                                                    <i className="fa-solid fa-trash text-primary me-2 fs-6"></i>
                                                                    <span className=' text-dark'>Delete</span>
                                                                </div>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                        ))
                                            :
                                            <tr className='d-flex justify-content-center mt-5 w-100 align-items-center'>Sorry.... Nothing to dispaly</tr>
                                    }
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>

            </div>

        </>
    )
}

export default Hometable