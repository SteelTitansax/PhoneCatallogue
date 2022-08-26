import React, { useState, useEffect } from "react";
import "./App.css";
import Products from "../components/Products";
import Characteristics from "../components/Characteristics";


const App = () => {
  const [chars, setChars] = useState([]);
    const handleAddToChar = (e,product) =>{
      
        setChars([
         ...chars, 
         e,
       ])
       console.log(chars)
     return chars;
     }
     
     const removeChar = (id) => {
      const filteredChars = chars.filter(chars => chars.id !== id);
      setChars(filteredChars);
    }
     
  return (
    <div className="bg-secondary">
      <div className="bg-dark">
        <div className="text-center img-fluid">
          <br />
          <img
            className="header__image"
            src="https://images.ctfassets.net/5gv1edeicqfs/bomBQDobMA6eyu4CkuYmM/6f5debe74cf1e335bb0be7e3ecbba40b/gs-logo.png"
          />
        </div>
        <hr className="alert-success"/>
        <h3 className="bg-dark text-white pl-2">Phone Catalogue </h3>
        
        <hr className="alert-success"/>
        
        
      </div>
      
      <div className="row mr-1">
        <div className="col-md-1"></div>
        <div className="col-md-5">

      <Products handleAddToChar={handleAddToChar} />
      
        </div>
        <div className="col-md-5">
        <Characteristics chars={chars} removeChar={removeChar}/>    

        </div>
        


        </div>
    </div>
  );
};

export default App;
