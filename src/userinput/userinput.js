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
        <input style={istyle} type="text" onChange={props.inputtext} value={props.defaluusername} />
    </div>)
}
export default Userinput;