
import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';

import Person from '../person/person.js';
import './persons.css';


const StyleButton = styled.button`
  background-color:  ${props=> props.buttonclicked ?  `red` :`green`};
  padding:5px 10px;
  border:2px solid black;
  marginTop:40px;
 box-shadow:1px 10px 40px;
  outline:none;
  cursor:pointer;

&:hover{
background-color: ${props=> props.buttonclicked ?  `pink` :`lightgreen`};
padding:5px 20px;

}
`;


class Persons extends React.Component{
    state={
        persons:[
            {id:1, name:"sai1",age:"27", year:"1992"},
            {id:2, name:"sai2",age:"27", year:"1993"},
            {id:3, name:"sai3",age:"29", year:"1994"},
          ],
        country:"indian",
        showitems:false,
        
    };


deletperson=(personindex)=>{
  const personsarray=this.state.persons;
  personsarray.splice(personindex,1);
  this.setState({persons:personsarray});
};
 
  // changestate=(arg)=>{
  //     this.setState({
  //         persons:[
  //           {name:arg ,age:"27", year:"1992"},
  //           {name:"sai5",age:"27", year:"1993"},
  //           {name:"sai6",age:"29", year:"1994"},
  //         ],
  //         country:"america"
  //     })
  // };

   togglepersons=()=>{
    this.setState({showitems:!this.state.showitems})
  };
 

  inputnamechange=(event,personsid)=>{
      const personindex=this.state.persons.findIndex( p=>{
        return p.id===personsid;
      });
     const  personcopy=this.state.persons[personindex];

     personcopy.name=event.target.value;

     const personsarray =[...this.state.persons];
     personsarray[personindex]=personcopy;
     this.setState({persons:personsarray})
    
  };


  render(){   

  
  
    let persons="click the button";

    if((this.state.showitems)){
      persons=(<div>

        {this.state.persons.map((personitem,index)=>{
          return <Person
          clickperson={()=>{this.deletperson(index)}}
          userinput={(event)=>this.inputnamechange(event,personitem.id)}
          name={personitem.name}
          age={personitem.age}
          year={personitem.year}
          key={personitem.id}/>
        })
      
      }

      {/* <Person userinput={this.inputnamechange}  name={this.state.persons[0].name} age={this.state.persons[0].age} year={this.state.persons[0].year}/>
      <Person  userinput={this.inputnamechange2} clickperson={()=>{this.changestate("nuve")}} name={this.state.persons[1].name} age={this.state.persons[1].age} year={this.state.persons[1].year}/>
      <Person userinput={this.inputnamechange3} name={this.state.persons[2].name} age={this.state.persons[2].age} year={this.state.persons[2].year}/>
      {this.state.country} */}

      </div>);
      StyleButton.backgroundColor="red"
      StyleButton[':hover']={
        backgroundColor:'red'
      }
    }

    const classes=[];
    if(this.state.persons.length<=3){
      classes.push("yellow");
    }
    if(this.state.persons.length<=2){
      classes.push("bold");
    } if(this.state.persons.length<=1){
      classes.push("blue");
    }
        return (
            <div className = "Persons">
     {/* <button style={switchstyle} onClick={()=>{this.changestate("buttonsai4")}}>switch names</button> <br/> */}
       <p className={classes.join(' ')}>this is paragraph</p>
         <StyleButton buttonclicked={this.state.showitems} onClick={this.togglepersons}>result</StyleButton>
         <br/>
          {persons}
  
        </div>

        );
        }
};

export default Persons;

// =>******************
// usinf functions useState, method

// this is using normal function
// import React,{useState} from 'react';
// const Persons=(props)=>{
//  const [this.state,chnagedthis.state]=useState({
//         persons:[
//             {name:"sai1",age:"27", year:"1992"},
//            {name:"sai2",age:"27", year:"1993"},
//               {name:"sai3",age:"29", year:"1994"},
//         ],
//     });

//  const changenames=()=>{
//               chnagedthis.state({
//                   persons:[
//                     {name:"sai4",age:"27", year:"1992"},
//                     {name:"sai5",age:"27", year:"1993"},
//                     {name:"sai6",age:"29", year:"1994"},
//                   ],
                 
//               });
//           };

//           return (
//             <div>
//                 <button onClick={changenames}>switch names</button>
//              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} year={this.state.persons[0].year}/>
//              <Person name={this.state.persons[1].name} age={this.state.persons[1].age} year={this.state.persons[1].year}/>
//              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} year={this.state.persons[2].year}/>
//             </div>
//         )
    
// };
// export default Persons;
