
import './App.css';
import React from 'react';
// import Persons from './persons/persons.js';
// import Cal from './calculator/calsi.js';
import Userinput from './userinput/userinput.js';
import Useroutput from './useroutput/useroutput.js';


class App extends React.Component {
state={
  username:"supermax",
};

addinputtostate=(event)=>{
  this.setState({username:event.target.value})
}
 render(){
  return (
    <div className="App">
    <Userinput inputtext={this.addinputtostate} 
    defaluusername={this.state.username} />
    <Useroutput name1={this.state.username} />
    <Useroutput name1={this.state.username}/>
    <Useroutput name1="sai"/>
      {/* <Persons/> */}
      {/* <Cal/> */}
    </div>
  );
}
  
}

export default App;

//   state={
//  persons:[
//     {name:"sai1",age:"27" ,year:"1992"},
//     {name:"sai2",age:"28" ,year:"1993"},
//     {name:"sai3",age:"29" ,year:"1994"},
//   ],
//   newprop:"this is prop1"
// }
// stateupdate=()=>{
//   this.setState({
//     persons:[
//       {name:"sai4",age:"27" ,year:"1995"},
//       {name:"sai5",age:"28" ,year:"1996"},
//       {name:"sai6",age:"20" ,year:"1997"},
//     ],
//     newprop:'this is prop2'
    
//   });
// };

//   render(){
   
//   return (
//     <div className="App">
// <button onClick={this.stateupdate}>clock to chnage</button> 

  

//   <Perosn name={this.state.persons[0].name}  age={this.state.persons[0].age} year={this.state.persons[0].year} />
//     <Perosn name={this.state.persons[1].name}  age={this.state.persons[1].age} year={this.state.persons[1].year} />
//     <Perosn name={this.state.persons[2].name}  age={this.state.persons[2].age} year={this.state.persons[2].year} />
//     {this.state.newprop}
  
//     </div>
//   );
// }
// }

