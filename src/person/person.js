
import React from 'react';
// import './person.css';

import styled from 'styled-components';

const StyleDiv = styled.div`


    width: 50%;
    margin: 20px auto;
    background-color: yellow;
    box-shadow: 1px 10px 10px rgb(21, 21, 36);
    padding: 10px;
    text-align: center;
  
  
  input {
    text-decoration: none;
    outline: none;
    width: 80%;
    height: 30px;
    border-radius: 5px;
    border: 5px solid rgb(7, 5, 83);
    margin: 5px auto;
  }
  
   @media (max-width:700px){
    width:80%;
    background-color:red;
}
`;
 const Person =(props)=>{


// const stylemedia1={
//     '@media (min-width: 700px)':{
//         width:"600px",
//         backgroundColor:"red",
//     }

// }
    return (

        // <div className="Person" style={stylemedia1} >
      <StyleDiv>
        <p onClick={props.clickperson}> {props.name} is {props.age} years born{props.year}</p>
       <input type="text " onChange={props.userinput} />
       </StyleDiv>
    // </div>

        );

}

export default Person;