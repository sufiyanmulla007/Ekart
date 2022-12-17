import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Singimg from './Singimg';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
const Registration = useNavigate();
const [inpval,setInpval]=useState({
  name:"",
  email:"",
  password:"",

});
// console.log(inpval);
const [data,setData]=useState([]);
const getDeta=(e)=>{
  // console.log(e.target.value);
  // object destructuring
const {value,name} =e.target;
// console.log(value,name);
setInpval(()=>{
  return{
    ...inpval,[name]:value
  }
})
}
const AddData =(e)=>{
 e.preventDefault();
//  console.log(inpval);
const {name,email,password}=inpval;
if(name == ""){
 alert("enter your name");
}else if(email === ""){
  alert("email field is require");
}else if(!email.includes("@")){
 alert("plz enter your valid email")
}else if(password == ""){
 alert("enter your password");
}else{
  alert("now you are successfully registered");
  localStorage.setItem("userId",JSON.stringify([...data,inpval]));
  Registration("/Sing_In")
}
}
  return (
    <>
    <div className="container mt-3">
    <section style={{display:'flex',justifyContent:"space-between"}}>
    <div className="left-data mt-3 p-3" style={{width:"100%"}}>
    <h3 >Sing Up</h3>
    <form>
    <Form.Group className="mb-3 " style={{width:"250px"}} controlId="formBasicEmail">
    <Form.Control type="text" name='name' placeholder="userId" 
    onChange={getDeta}
    />
    </Form.Group>
     <Form.Group className="mb-3"style={{width:"250px"}} controlId="formBasicPassword">
      <Form.Control type="email" name='email' placeholder="Enter email"
      onChange={getDeta}
      />
      </Form.Group>
      <Form.Group className="mb-3"style={{width:"250px"}} controlId="formBasicPassword">
      <Form.Control type="password" name='password' placeholder=" Password" 
      onChange={getDeta}
      />
      </Form.Group>
      <Button variant="primary" type="submit" className='btn col-lg-5'
      style={{ background: "rgb(67, 185, 127)" }}
      onClick={AddData}
      >
        Submit
      </Button>
    </form>
    <p className='mt-3'>Already Have an Account <span><NavLink to="/Sing_in">SingIn</NavLink></span> </p>
    </div>
    <Singimg/>
    </section>
    </div>
    </>
  );
};

export default Login;
