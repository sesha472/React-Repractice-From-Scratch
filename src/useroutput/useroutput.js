import React from 'react';
import './useroutput.css';
const Useroutput=(props)=>{

    return(
    <div className="Useroutput">
      <p>the username : {props.name1}</p>
      <p>this is para2</p>
    </div>);
}
export default Useroutput;