import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { Alert, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Hometable from '../../Components/HomeTable/Hometable'
import LoadingSpinner from '../../Components/Spinners/LoadingSpinner'
import { addData, deleteData, updateData } from '../../Components/contexts/ContextShare'
import { deleteuser, getallusers } from '../../Services/allApi'



function Home() {

  //use usecontext
  const {editdata,seteditdata} = useContext(updateData)

  const {deletedata,setdeletedata}=useContext(deleteData)


  //to hold all users
  const [userdata,setUserData] = useState([])

  //state to hold search key
  const [search,setSearch]=useState("")


  const navigate = useNavigate()

  const{useradd,setUserAdd}= useContext(addData)

  //spinner state
  const [showSpin, setShowSpin] = useState(true)

  //to navigate to register page when button clicked
  const adduser = () => {
    navigate('/register')
  }

  //api call for get all users
  const getalluserData =async()=>{
    const response = await getallusers(search)

    if(response.status===200){
      setUserData(response.data);
    }
    else{
      console.log("cannot fetch data");
    }
  }
  console.log(userdata);

  //delete user
  const deleteUser=async(id)=>{
    //make an api call
    const response = await deleteuser(id)
    console.log(response);
    if(response.status===200){
      getalluserData()
      setdeletedata(response.data)
    }
    else{
      console.log("error");
    }
  }

  useEffect(()=>{
    getalluserData()

    setTimeout(()=>{
      setShowSpin(false)
    },1000)
  },[search])

  return (
    <>
    {
      useradd &&  <Alert variant="success" onClose={() => setUserAdd("")} dismissible>
        {useradd.fname.toUpperCase()} Successfully Registered
      </Alert>
    }
    {
      editdata && <Alert variant="success" onClose={() => seteditdata("")} dismissible>
      {editdata.fname.toUpperCase()} Successfully updated
    </Alert>
    }
    {
      deletedata && <Alert variant="danger" onClose={() => setdeletedata("")} dismissible>
      {deletedata.fname.toUpperCase()} Successfully Deleted
    </Alert>
    }
      <div className="container mt-5">
        <div className="main_div">
          <div className="search_Add d-flex justify-content-between">
            <div className="search col-md-4">
              <Form className='d-flex'>
                <Form.Control className='me-2' type="text" placeholder="Search"
                onChange={e=>setSearch(e.target.value)} />
                <Button className='btn btn-success'>Search</Button>
              </Form>
            </div>

            <div className="add_btn">
              <Button onClick={adduser} className='btn btn-primary'> <i className="fa-solid fa-user-plus"></i> Add</Button>

            </div>
          </div>
        </div>

        <div className="second_div">

          {
            showSpin ? <div className='d-flex justify-content-center'><LoadingSpinner/></div> :<Hometable 
            displayData={userdata}
            deleteUser={deleteUser}
            />
          }
        </div>

      </div>
    </>
  )
}

export default Home