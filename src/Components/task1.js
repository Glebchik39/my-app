import { useState } from "react";
import React from "react";

export function User() 
{
    const [name, setName] = React.useState("Tom");  // name="Tom"
    const [age, setAge] =  useState(36);       // age=36
     
    function handleNameChange(event) {    
      setName(event.target.value);  
   }
     
    function handleAgeChange(event) {  
      if(event.target.value>1 && event.target.value<80)  
          setAge(event.target.value);
      else
        setAge(1)
   }
    return (
      <div>
        <h3>Имя: {name}</h3>
        <h3>Возраст: {age}</h3>
         
        <div>
          <p>Имя: <input type="text" onChange={handleNameChange} /></p>
          <p>Возраст: <input type="number" min="1" max="100" onChange={handleAgeChange} /></p>
        </div>
      </div>
    );
  }