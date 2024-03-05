
import React from "react";
import Pizza from "./Pizza";
import Sweet from "./Sweet"
import { useSelector } from 'react-redux';
import "../../style/Poduct/StoreStyle.css";

const HomeScreen = () => {
  const pizza = useSelector((state) => state.pizzas.pizzasdata);
  const sweet=useSelector((state)=>state.sweet.sweetdata)

  return (
    
      <>
       
                  <div className="Card-templete">    
                          <>
                          {pizza.map((pizza,index) => (
                              <Pizza  Items={pizza} key={index}/>
                          ))}
                          </>
              
                  </div>

            <h1 className="Heading">Sweet treat for You</h1>
            <div className="Card-templete">
                  { sweet.map((sweet,index) => (
                      <Sweet Items={sweet} key={index}/>
                  ))}
            </div>
      
    </>
  );
};

export default HomeScreen;