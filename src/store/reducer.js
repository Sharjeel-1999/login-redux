const INITIAL_STATE = {
  email:"",
  userName:"",
  password:""
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
      case "UPDATE_USERD_DATA":
          // console.log(action,'action')
          return {...state,email:action.email,userName:action.userName,password:action.pass}
  }
  return state;
  console.log(state);
}

export default reducer;
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