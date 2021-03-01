
import React from 'react';
import './person.css';
 const Person =(props)=>{

    return (
        <div className="Person">
        <p onClick={props.clickperson}> {props.name} is {props.age} years born{props.year}</p>
       <input type="text " onChange={props.userinput} value={props.name}/>
  </div>
        );

}

export default Person;