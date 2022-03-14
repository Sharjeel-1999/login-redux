import React,{useState,useEffect} from "react";
import { connect } from "react-redux";

function Login(prop) {
  const [state,setState]= useState({
      email:"",password:"",userName:"",
      
  })
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);
  // console.log(state);
  // let data = localStorage.getItem(setState(""));
  // console.log(data)

 
  return (
    <div>
      <h1>FORM</h1>
    <input type="text" placeholder="Enter Your Email" onChange={(val)=>setState({...state,email:val.target.value})} /> <br/><br/>
    <input type="text" placeholder="Enter Your Password" onChange={(val)=>setState({...state,password:val.target.value})} /><br/><br/>
    <input type="text" placeholder="Enter Your UserName" onChange={(val)=>setState({...state,userName:val.target.value})} /><br/><br/>

    <button onClick={()=>prop.dispatch({type:"UPDATE_USERD_DATA",email:state.email,pass:state.password,userName:state.userName})}>Login</button>
    <button onClick={()=>prop.dispatch({type:"UPDATE_USERD_DATA",email:state.email,pass:state.password,userName:state.userName})}>Sign-up</button>
    </div>
  );
}
const newApp = connect()(Login);

export default newApp;
// function signIN(){   
//   var flagUser=false;
//   var data = localStorage.getItem('userData');
//   var userEmail = document.getElementById('email').value
//   var userPassword = document.getElementById('password').value
//   var usersData = JSON.parse(data);
//  for(var i = 0;i<usersData.length;i++){
//      if(userEmail===usersData[i].userEmail && userPassword===usersData[i].userPassword){
//          alert("Email Address are login successfully");
//          flagUser=true
//      }
//  }
//  if(!flagUser){
//      alert("Please signu up first")
//  }

// }


// function signup(){
//   var data = localStorage.getItem('userData');
//   var userEmail = document.getElementById('email').value
//   var userPassword = document.getElementById('password').value
//   var flagUser=false;
//   console.log(data);
//   var obj ={
//       userEmail,
//       userPassword
//   }

//   if(!userEmail === "" || userPassword === ""){
//       alert ('data field must be filled');
//   }
//   if(!userEmail === "" && userPassword === ""){
//       alert ('both data field must be filled');
  
//   }
//   if(!data){
//       console.log("Hello Developer jaag jao")
//   localStorage.setItem("userData",JSON.stringify([obj]))
//   }else{
      
//       var usersData = JSON.parse(data);

//           for(var i = 0;i<usersData.length;i++){
//               if(userEmail == usersData[i].userEmail){
//                   alert("Email Address already exist");
//                   flagUser=true
//               }
//           }
//           if(!flagUser){
//               usersData.push(obj);
//               localStorage.setItem("userData",JSON.stringify(usersData))
//           }
//   }
// }