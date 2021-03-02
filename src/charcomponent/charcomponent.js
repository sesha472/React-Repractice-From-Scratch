

import React from 'react';

const Charc=(props)=>{
const cstyle = {
    backgroundColor:"aqua",
    disply:"inline-block",
    padding:"20px",
    margin:"10px",
    border:"2px solid green",
    textAlign:"center",

};

    return (
    <div style={cstyle} onClick={props.deletself}>
             {props.inputchar}
         </div>
         );


};
export default Charc;
