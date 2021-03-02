
import React from 'react';


const Validation =(props)=>{

    
   let msg="enter min 5 char";
   if( props.textlength > 5){
       msg="long text etered"

   }
    return (
        <p>
            {msg}
            {/* { (props.textlength)<= 10 ?  <p>ENTER MIN 5</p>:<p>TEXT IS TOLONG</p>  } */}
            </p>
    );
};
export default Validation;