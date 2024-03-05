import "../../style/Home/HomeStyle.css"
import { SliderData } from "../../data/Home";
import {useEffect,  useState} from "react";
import Product from "../../components/Product"

import Footer from "../../components/Footer";
const Home= () =>{

    const [currImg,setCurrImg]= useState(0)
    
    useEffect(() => {
   const timer=setTimeout(()=>{
        if(currImg===2){
            setCurrImg(0)
        }
        else{
            setCurrImg(currImg+1)
        }
        
   },6000)
   return ()=>clearTimeout(timer)
   }, [currImg])
    
    return(
        <>
        <section >
            <div className="background" >
            <div className="Arrow">
            <i className="fa-solid fa-chevron-left" onClick={()=>{currImg > 0 && setCurrImg(currImg-1)}}></i>
            </div>
            <div className="container " style={{backgroundImage:`url(${SliderData[currImg].img} )`}} >
                <div className="sliderDescriptionBox">
                <div className="discriptionBox">
                    <div className="contentBox">
                                    <>
                                    <h1 className="title">{SliderData[currImg].title}</h1>
                                    <p className="ImageDiscription">{SliderData[currImg].Discription}</p>
                                    <p>{SliderData[currImg].info}</p>
                                    <button className="InfoButton" onClick={SliderData[currImg].url}>ORDER NOW</button>
                                    </>
                    </div>
                </div>
                
                </div>
            </div>
            <div className="Arrow">
            <i className="fa-solid fa-chevron-right" onClick={()=>{currImg < SliderData.length-1 && setCurrImg(currImg+1)}}></i>
            </div>
            </div>
            <Product/>
        </section>
        <Footer/>
        </>
    );
}
export default Home;