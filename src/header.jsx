import react from 'react'
import searchimage from './imagesimport/search.png'
import notification from './imagesimport/notification.jpg'
// import profile from './imagesimport/profile.png'
// import './App.css'
import './dashdesign.css';
import Dash from './dashboard'
import { useNavigate } from 'react-router-dom';
useNavigate

export default function Header(props) {
    let name = props.name
const navi = useNavigate();
 const loggingout =()=> {
     navi('/');
 }

    return (<>
        <div className='header'>

            <div style={{ display:'flex',flexDirection:'column',paddingTop: '2px',position:'relative' }}>
                <div><img src={notification} style={{width:'10px',height:'10px',position:'absolute' ,bottom:'1px',right:'5px'}} /></div>
                <div style={{ fontSize: '35px', color: 'yellow',paddingLeft:'5px', marginTop:'0'}}>Home</div>
            </div>
            <div>
                <button onClick={loggingout}>Logout</button>
                <div style={{color:'white'}}>{name}</div>
            </div>
            <div>
                <input type="text" placeholder='search...' style={{
                    width: '400px',
                    marginTop: '0', top: '0', height: '35px'
                    , border: '1px solid blue', borderRadius: '5px', backgroundColor: 'white', placeSelf: 'center'
                }} />
                <button style={{
                    width: '40px', height: '35px', border: '1px solid blue', borderRadius: '5px',
                    backgroundColor: 'red'
                }}> Go
                </button>

            </div>
            <div className="dropdown">
                <button className="dropbtn">My Account</button>
                <div className="dropdown-content">
                    <a href="/login">Profile</a>
                    <a href="#">Orders</a>
                    <a href="#">Coupon</a>
                </div>
            </div>
            <div>
                <img src={notification} style={{ width: '40px', height: '40px', borderRadius:'50%'}} />
            </div>
        </div>
    </>)
}
