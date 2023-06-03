import React from 'react'
import './Hometable.css'
import { Card, Col, Dropdown, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'





function Hometable() {
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
                                    <tr>
                                        <td>1</td>
                                        <td>Ganesh W Lal</td>
                                        <td>ganesh@gmail.com</td>
                                        <td>04-08-1997</td>
                                        <td>Male</td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    Active
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >Active</Dropdown.Item>
                                                    <Dropdown.Item >InActive</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                        <td>
                                            <img className='rounded' width={'30px'} height={'30px'} src="https://i.postimg.cc/c13R4thh/corporate-user-icon.png" alt="" />
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="light" id="dropdown-basic1">
                                                    {/* <i class="fa-solid fa-ellipsis-vertical fs-3"></i> */}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item ><Link to={'/profile/1'} className='text-decoration-none'>
                                                        <i className="fa-solid fa-eye text-primary me-2 fs-6"></i><span className=' text-dark'>View</span>
                                                    </Link></Dropdown.Item>
                                                    <Dropdown.Item ><Link to={'/edit/1'} className='text-decoration-none'>
                                                        <i className="fa-solid fa-pen text-danger me-2 fs-6"></i><span className=' text-dark'>Edit</span>
                                                    </Link></Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <i className="fa-solid fa-trash text-primary me-2 fs-6"></i><span className=' text-dark'>Delete</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
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