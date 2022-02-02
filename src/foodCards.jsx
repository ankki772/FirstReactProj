import { hover } from "@testing-library/user-event/dist/hover";
import react from "react-router-dom";
import Burger from './imagesimport/burger.jpg'
import Nonveg from './imagesimport/nonveg.jpg'
import Chinese from './imagesimport/chinese.jpg'
import Kulche from './imagesimport/kulche.jpg'
export default function FoodCards(){
    const cardConatainer={
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
    const cards={
        margin:'20px',
        width:'250px',
        height:'250px',
        backgroundColor:'red',
        border:'2px solid grey',
    
        
    }
    const imageDimension={
        width:'100%',
        height:'180px'
    }
    const clickHere={
        textAlign:'center',color:'white',
        marginLeft:'70px'
        
    }
    

    return(
        <>

          <div style={cardConatainer}>
                <div style={cards}>
                    <img src={Burger} alt="error loading image" style={imageDimension} />
                     <h3 style={{textAlign:'center'}}>Delicious Burger's</h3>
                     <a href='#' style={clickHere}> click here </a>               
                </div>
                <div style={cards}>
                <img src={Nonveg} alt="error loading image" style={imageDimension} />
                     <h3 style={{textAlign:'center'}}> Chicken's Corner</h3>
                     <a href='#' style={clickHere}> click here </a>   
                </div>
                <div style={cards}>
                <img src={Chinese} alt="error loading image" style={imageDimension} />
                     <h3 style={{textAlign:'center'}}> Watering Chinese food's</h3>
                     <a href='#' style={clickHere}> click here </a>   
                </div>
                <div style={cards}>
                <img src={Kulche} alt="error loading image" style={imageDimension} />
                     <h3 style={{textAlign:'center'}}>kulche's corner</h3>
                     <a href='#' style={clickHere}> click here </a>   
                </div>
          </div>

        </>
    );
}