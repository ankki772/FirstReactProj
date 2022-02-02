
import Burger from './imagesimport/burger.jpg'
import Nonveg from './imagesimport/nonveg.jpg'
import Chinese from './imagesimport/chinese.jpg'
import Kulche from './imagesimport/kulche.jpg'
export default function slideShow(){
slide()

    const slideShowConatainer={
       
        width:'100%',
        position:'relative'
    }
    
    const image={
       
        width:'100%',
        height:'400px',
        display:'none'
    }
        

    const prev={
        position:'absolute',
        top:'48%'
    }
    const next={
        position:'absolute',
        top:'48%',
        right:0

    }
    
    function slide(){
    let im = document.getElementsByClassName('container');
        console.log(im);
        console.log(im[0]);
  
    }
    
  

    return(<>
            <div style={slideShowConatainer} className="container">
                <div>
                    <img src={Burger} style={image} className="images"/>
                </div>

                <div>
                    <img src={Nonveg} style={image} className="images" />
                </div>
                <div>
                    <img src={Chinese} style={image} className="images"/>
                </div>

                <div>
                    <img src={Kulche} style={image} className="images"/>
                </div>
               <button style={prev}> prev </button> 
               <button style={next}> next </button>

            </div>
    
    
    </>);
}