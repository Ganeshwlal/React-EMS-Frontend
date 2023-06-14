import React, { useContext, useEffect, useState } from 'react'
import './Edit.css'
import { Button, Card, Form, Row } from 'react-bootstrap'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../../Components/Spinners/LoadingSpinner';
import { editUser, viewUser } from '../../Services/allApi';
import { BASE_URL } from '../../Services/Base_url';
import { useNavigate, useParams } from 'react-router-dom';
import { updateData } from '../../Components/contexts/ContextShare';



function Edit() {

  //use usecontext
  const {editdata,seteditdata} = useContext(updateData)

  //navigate
  const navigate = useNavigate()


  //get path parameter from asociated route
  const {id} = useParams()
  console.log(id);

  //get a particular user details
  const userDetails = async()=>{
    const {data} = await viewUser(id)
    setInputData(data)
    // setImage(data.profile)
    setStatus(data.status)
    setExistImg(data.profile)
    // console.log(data);
  }


    //spinner state
    const [showSpin, setShowSpin] = useState(true)
  
  const option=[
    {value:'Active', label:'Active'},
    {value:'InActive', label:'InActive'}
  ]

  //state to hold normal inputs
  const [inputData, setInputData]=useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    gender:"",
    location:"",
    dob:""
  })

  //status state
  const [status,setStatus]=useState("Active")

  //image state
  const [image,setImage]=useState("")

  //preview state
  const [preview,setPreview] = useState("")

  //to hold image from existing user
  const [existImg,setExistImg] = useState("")

  const setInputValue = (e)=>{
    const {name,value} = e.target
    setInputData({...inputData,[name]:value})
  }
  console.log(inputData);

  //to update status
  const setStatusvalue = (e)=>{
    setStatus(e.value)
  }
  console.log(status);

  const setProfile = (e)=>{
    // console.log(e);
    setImage(e.target.files[0])
  }
  console.log(image);

  useEffect(()=>{
    userDetails()

  },[id])


  useEffect(()=>{
    if(image){
      setExistImg("")
      // setImage("")
    setPreview(URL.createObjectURL(image))
    }
    setTimeout(()=>{
      setShowSpin(false)
    },1000)
  },[image])

 const handleSubmit =async(e)=>{
  e.preventDefault()
  const {fname,lname,email,mobile,gender,location,dob}=inputData
  if(fname===""){
    toast.error("first name required")
  }
  else if(lname===""){
    toast.error("last name required")
  }
  else if(email===""){
    toast.error("email required")
  }
  else if(mobile===""){
    toast.error("mobile required")
  }
  else if(gender===""){
    toast.error("gender required")
  }
  
  else if(status===""){
    toast.error("status required")
  }
  else if(image===""){
    toast.error("profile required")
  }
  else if(location===""){
    toast.error("location required")
  }
  else if(dob===""){
    toast.error("dob required")
  }

  else{
    // toast.success("Update Successful")

    //API call
    const data = new FormData()
    data.append("user_profile",image || existImg)
    data.append("fname",fname)
    data.append("lname",lname)
    data.append("email",email)
    data.append("mobile",mobile)
    data.append("gender",gender)
    data.append("location",location)
    data.append("status",status)
    data.append("dob",dob)

    const headerConfig = {
      "Content-Type":"multipart/form-data"
    }

    //edit user api call
    const response = await editUser(id,data,headerConfig)
    console.log(response);

    if(response.status===200){
      seteditdata(response.data)
      navigate('/')
    }
    else{
      toast.error("Location required")
    }

    

  }
 }

 



  return (
    <>
    {
            showSpin ? <div className='d-flex justify-content-center'><LoadingSpinner/></div> :
      <div className="container mt-5">
        <h2 className="text-center mt-3">Update EMployee Details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className="text-center">
            <img className='p-1  border rounded-circle' width={'50px'} height={'50px'} src={preview?preview: `${BASE_URL}/uploads/${existImg}`} alt="" />

          </div>

          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='fname' placeholder="First Nmae"
                 value={inputData.fname} onChange={setInputValue} />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='lname' placeholder="Last Nmae"
                value={inputData.lname} onChange={setInputValue}/>
              </Form.Group>
              

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicemail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Email Address"
                value={inputData.email} onChange={setInputValue} />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" name='mobile' placeholder="Mobile number"
                value={inputData.mobile}  onChange={setInputValue}/>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
                <Form.Label>Select Gender</Form.Label>
                <Form.Check
                  type={'radio'}
                  label={`Male`}
                  name='gender'
                  value={'Male'}
                  checked={inputData.gender=="Male"?true:false}
                  onChange={setInputValue}
                />

                <Form.Check
                  type={'radio'}
                  label={`Female`}
                  name='gender'
                  value={'Female'}
                  checked={inputData.gender=="Female"?true:false}

                  onChange={setInputValue}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
                <Form.Label>Select Employee Status</Form.Label>
                <Select  options={option} defaultValue={status} placeholder={status} onChange={setStatusvalue}>

                </Select>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclphotpo">
                <Form.Label>Choose Profile</Form.Label>
                <Form.Control type="file" name='user_profile' onChange={setProfile}/>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclocation">
                <Form.Label>Employee Location</Form.Label>
                <Form.Control type="text" name='location' placeholder="Employee Location"
                value={inputData.location} onChange={setInputValue}/>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasiclocation">
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control type="date" name='dob' placeholder="Employee Location"
                value={inputData.dob} onChange={setInputValue} />
              </Form.Group>



              <Button onClick={handleSubmit} type='submit' variant="primary">Submit</Button>




            </Row>
          </Form>
        </Card>
      </div>
}
      <ToastContainer position='top-center'/>

    </>
  )
}

export default Edit