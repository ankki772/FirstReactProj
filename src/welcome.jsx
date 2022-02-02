import React from 'react';
import { Link } from 'react-router-dom'
import wel from './imagesimport/wlcimage.jpg'
import teacher from './imagesimport/teachers.png'
import "./welcome.css"
import FoodCards from './foodCards';
import SlideShow from './slideShow'
export default function Welcome() {
    const headDesign = {
        backgroundColor: 'gray', display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 10px 10px 0',
        flexDirection: 'row'
    }
    const sideMenu = {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        backgroundColor: 'burlywood',
        height: '90vh',
        width: '300px',
        padding: '40px 40px 40px 40px',
    }
    const left = {
        justifyContent: 'center'
    }
    return (<>

        <div style={headDesign}>
            <div style={{ fontSize: '25px' }} > <strong >Welcome to </strong>
                <strong style={{
                    color:
                        'yellowgreen'
                }} > FoodyFreak!</strong></div>


            <div>
                <select name="cars" id="cars" style={{height:'35px' ,borderRadius:'5px',opacity: '0.4',alignItems:'center',
                border:'1px solid blue',color:'black'}}>
                    <option value="volvo">Veg</option>
                    <option value="saab">Non-veg</option>
                    <option value="mercedes">Chinese</option>
                    <option value="audi">Punjabi</option>
                </select>
                <input type="text" placeholder='search...' style={{
                    width: '400px',
                    marginTop: '0', top: '0', height: '35px'
                    , border: '1px solid blue', borderRadius: '5px', opacity: '0.4'
                }} />
                <button style={{ width: '40px', height: '35px', border: '1px solid blue', borderRadius: '5px',
                 backgroundColor: 'red' }}> Go
                </button>


            </div>
            <div style={{ display: 'flex', gap: '15px', fontSize: '20px' }}>
                <div >
                    <Link to='/signup'>
                        Signup
                    </Link >
                </div>
                <div>
                    <Link to='/login'>
                        Signin
                    </Link>

                </div>
            </div>

        </div>
        <div style={{
            backgroundImage: `url(${wel})`, height: '100vh', width: '100%',
            backgroundRepeat: 'no-repeat', backgroundSize: ' 1500px 100vh', display: 'flex',flexDirection:'column'
        }}>
            <div style={{margin:'50px' ,width:'1000px'}}>
                <h1 style={{fontSize:'60px',color:'green'}}>"You don't need </h1>
                <h1 style={{marginLeft:'70px' ,left:'70px',fontSize:'40px'}}>a silver</h1>
                <h1>fork to eat food"</h1>
            </div>
        <br/>
          <FoodCards/>  
            <SlideShow/>

        </div>
        {/* <div style={sideMenu}>
            <span style={{fontSize:'40px',color:'blue',paddingLeft:'35px',paddingBottom:'30px'}}>blueChip</span>
        <span ><img src={teacher}></img>Services</span>
           
            <hr />
            <span><img src={teacher}></img>Comment</span>
            <hr />
            <span><img src={teacher}></img>Table</span>
            <hr />
            <span><img src={teacher}></img>UI Comment</span>
            <button value='PrimeMembership' style={{backgroundColor:'skyblue',marginTop:'25px',fontSize:'20px',border:'1px solid green'}}>Prime Membership <br/>Rs.499</button>
        </div> */}
    </>

    );
}