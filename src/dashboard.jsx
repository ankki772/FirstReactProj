import react from 'react'
import { Outlet,useLocation } from 'react-router-dom';
import Sidemenu from './sidemenu';
import Header from './header';
import { useState, useEffect } from 'react'
// import SignupPage from './SignupPage';
// import { Link, useNavigate } from 'react-router-dom'
// import login from "./login"
import './dashdesign.css'
import axios from 'axios';
export default function Dashboard() {
  const location = useLocation();
  const [name, setName] = useState([]);
  
  useEffect(() => {
    
  let name1 = location.state;
  
  setName(name1)
  },[]);
  
  
  

  const [value, setValue] = useState([])
  useEffect(() => {
    // API
    // fetch('http://dummy.restapiexample.com/api/v1/employees')
    //  .then((result) => result.json())
    //  .then((finalData)=>{ setValue(finalData) })
    const axios = require('axios')
    axios.get('https://fakestoreapi.com/products').then(response => {
      console.log(response.data)

      setValue(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, []);

  return (<>


    <div className='container'>
      <Sidemenu />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' ,overflowY:'auto'}}>
        <Header name={name}/>
        
        <center>
         
         { value.map((v,i)=> <div key={i} 
             style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',width:'800px',height:'100px',padding:'25px'}}> 
             <b>{v.id}</b>
  
             <p>{v.title}</p>
            </div>)  }
          </center> 
     
       
      </div>

    </div>
    
    {/* <button onClick={getList}>click</button>
      {value} */}

    {/* <center>
       { value.map((v)=> <div 
           style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',}}> 
           <b>{v.id}</b>
           <p>{v.title}</p>
          </div>)  }
        </center>  */}

  </>
  );
}

