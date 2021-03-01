import React from 'react';
import './useroutput.css';
const Useroutput=(props)=>{

    return(
    <div className="Useroutput">
      <p>THE USERNAME : {props.name1}</p>
      <p>THIS IS EXTRA text</p>
      <p>{props.children}</p>
    </div>);
}
export default Useroutput;