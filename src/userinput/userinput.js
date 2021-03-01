import React from 'react';

const Userinput=(props)=>{
const istyle={
    backgroundColor:"aqua",
    padding:"10px",
    outline:"none",
    border:"none",
    borderRadius:"5px",
}
    return(<div>
        <input style={istyle} type="text" onChange={props.inputtext} placeholder="enter name" />
    {props.children}
    </div>)
}
export default Userinput;