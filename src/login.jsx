import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function LoginPage() {
  
    const [username, setUserName] = React.useState();
    const [pwd, setPwd] = React.useState();

    const navi1= useNavigate();

    const onSubmitLogin = (e) => { 
        e.preventDefault();
        let userList = localStorage.getItem("userList");
        let verifyUser = JSON.parse(userList);
      
        console.log(userList);
        console.log(verifyUser);
        for(let i=0 ;i<verifyUser.length;i++){
          if(verifyUser[i].userName===username && verifyUser[i].pass === pwd){
            navi1("/dash",{state:verifyUser[i].userName});
            return
          }
        }
        alert('invalid user')
        // if(userName === ) {
        //    navi1('/Dashboard');
        // }
        
        // else{
        //    alert('Invalid User')
        // }
       
       
 

  }
    return ( 
    <div style={{display:'grid',backgroundColor:'gainsboro', height:'100vh'}}>
      {/* <form style={{placeSelf:'center',padding:'45px',width:'500px',height:'250px',}}> */}
      <fieldset style={{width:'500px',height:'250px',padding:'30px',border:'2px solid blue',placeSelf:'center'}}>
      <legend style={{color:'blue',fontSize:'30px'}}><strong>blueChip</strong></legend>
          <div>
            <label htmlFor="name">Name:</label><br />

            <input  id="name"  value={username} onChange={(e)=>setUserName(e.target.value)} placeholder='Enter Name...' 
            style={{width:'400px',height:'30px',borderRadius:'5px'}}/>
          </div>
          <br />
        <div>
          <label htmlFor="password">Password:</label> <br />
            <input id="password" type='password' value={pwd} onChange={(e)=>setPwd(e.target.value)} placeholder='Enter Password...' 
            style={{width:'400px',height:'30px',borderRadius:'5px'}}/>
        </div>
        <div>
       
        <input type='submit' value='Login' style={{marginTop:'20px',width:'100px',height:'25px',backgroundColor:'greenyellow'}} onClick={onSubmitLogin} />
        </div>
        </fieldset>
     
    </div> )
}
