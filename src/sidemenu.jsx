import react from "react"
import { Link } from "react-router-dom";
// import './App.css';
import './dashdesign.css'
import teacher from './imagesimport/teachers.png'


export default function Sidemenu(){
return(<>
<div className="side-menu">
        <div className="brand-name">foodyFreak!</div>
        <div style={{padding:'20px' ,fontSize:'20px'}}>
          <Link to='management'style={{paddingBottom:'20px'}} ><img src={teacher}></img>Management </Link>
          <br />
         
       </div>
       <hr />
          <div style={{padding:'20px' ,fontSize:'20px'}}>
          <Link to='settings'><img src={teacher}></img>Setting </Link>
        

        </div>
</div>
     
      </>
    );
}