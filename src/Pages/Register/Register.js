import React, { useContext, useEffect, useState } from 'react'
import './Register.css'
import { Button, Card, Form, Row } from 'react-bootstrap'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../../Components/Spinners/LoadingSpinner';
import { empRegister } from '../../Services/allApi';
import { useNavigate } from 'react-router-dom';
import { addData } from '../../Components/contexts/ContextShare';






function Register() {

  const navigate = useNavigate()

  //state to share data from register to all contact
  const {useradd,setUserAdd} = useContext(addData)

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

  //to update inputData state
  const setInputValue = (e)=>{
    const {name,value} = e.target
    setInputData({...inputData,[name]:value})
  }
  // console.log(inputData);

  //to update status
  const setStatusvalue = (e)=>{
    setStatus(e.value)
  }
  // console.log(status);

  const setProfile = (e)=>{
    // console.log(e);
    setImage(e.target.files[0])
  }

  // console.log(image);

  useEffect(()=>{
    if(image){
    setPreview(URL.createObjectURL(image))
    }
  },[image])

//handle submit
 const handleSubmit = async (e)=>{
  e.preventDefault()
  const {fname,lname,email,mobile,gender,location,dob}=inputData;
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
    // toast.success("finished")

    //API call
    const data = new FormData()
    data.append("user_profile",image)
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

    const response = await empRegister(data,headerConfig)
    console.log(response);

    if(response.status===200){

      //rrgister success, reset 
      setInputData({
        ...inputData,
        fname:'',
        lname:'',
        email:'',
        mobile:'',
        gender:"",
        location:'',
        dob:'',
      })
      setStatus('')
      setImage('')

      //share data to all contact page via use context
      setUserAdd(response.data)

      //navigate to all contact
      navigate('/')
    }

  }
 }

 useEffect(()=>{
  setTimeout(()=>{
    setShowSpin(false)
  },1000)
},[])


  return (
    <>
     {
            showSpin ? <div className='d-flex justify-content-center'><LoadingSpinner/></div> :
      <div className="container mt-5">
        <h2 className="text-center mt-3">Register EMployee Details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className="text-center">
            <img className='p-1  border rounded-circle' width={'50px'} height={'50px'} src={preview?preview: "https://i.postimg.cc/c13R4thh/corporate-user-icon.png"} alt="" />

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
                  onChange={setInputValue}
                />

                <Form.Check
                  type={'radio'}
                  label={`Female`}
                  name='gender'
                  value={'Female'}
                  onChange={setInputValue}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
                <Form.Label>Select Employee Status</Form.Label>
                <Select options={option} onChange={setStatusvalue}>

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

export default Register