
import React from 'react';
// import Radium,{StyleRoot} from 'radium';



import './App.css';


import Persons from './persons/persons.js';
// import Validation from './validationcomponent/validationcomponet.js';
// import Cal from './calculator/calsi.js';
// import Userinput from './userinput/userinput.js';
// import Useroutput from './useroutput/useroutput.js';
// import Charc from './charcomponent/charcomponent.js';

class App extends React.Component {
// state={
//   username:"supermax",
// };

// addinputtostate=(event)=>{
//   this.setState({username:event.target.value})
// }

// state={
//   userinput:""
// }

// updatestatewithinput=(event)=>{
//   this.setState({
//     userinput:event.target.value
//   });
// };
// deletcharhandler=(index)=>{
//   const textarry=this.state.userinput.split("");
//   textarry.splice(index,1);
//   const returnstring=textarry.join('');
//   this.setState({userinput: returnstring})


// };

 render(){

  // const charlist = this.state.userinput.split('').map((ch,index)=>{
  //   return <Charc deletself={()=>{this.deletcharhandler(index)}} inputchar={ch} key={index}/>;
  // });

  return (

    <div className="App">
  
  
      {/* <div className="Appwwlf">
   <input type="text"  onChange={this.updatestatewithinput} value={this.state.userinput} />
   <p >input text : {this.state.userinput}</p>
      <Validation textlength={this.state.userinput.length}/>
     {charlist}
      </div> */}

     {/* <div className="Appuserinput">
     <h1> The userinput output task</h1>
    <Userinput inputtext={this.addinputtostate}  />
    <Useroutput name1={this.state.username} />
    <Useroutput name1={this.state.username}/>
    <Useroutput name1="sai"> this is default username</Useroutput>
    </div>

    <div className="Appcal">
          <Cal/>
      </div> */}
            
    <div className="Apppersons">
    <Persons/>
    </div>
    
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

