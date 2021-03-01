
import React from 'react';
import Person from '../person/person.js';

class Persons extends React.Component{
    state={
        persons:[
            {name:"sai1",age:"27", year:"1992"},
            {name:"sai2",age:"27", year:"1993"},
            {name:"sai3",age:"29", year:"1994"},
        ],
        country:"indian"
    };

  changestate=(arg)=>{
      this.setState({
          persons:[
            {name:arg ,age:"27", year:"1992"},
            {name:"sai5",age:"27", year:"1993"},
            {name:"sai6",age:"29", year:"1994"},
          ],
          country:"america"
      })
  };

  inputnmaechnage=(event)=>{
this.setState({
    persons:[
        {name:event.target.value ,age:"27", year:"1992"},
        {name:"sai5",age:"27", year:"1993"},
        {name:"sai6",age:"29", year:"1994"},
      ],
})
  };
  inputnmaechnage2=(event)=>{
    this.setState({
        persons:[
            {name:"sai4" ,age:"27", year:"1992"},
            {name:event.target.value, age:"27", year:"1993"},
            {name:"sai6",age:"29", year:"1994"},
          ],
    })
      };

  render(){   

    const buttonstyle={

        backgroundColor:"yellow",
        padding:"5px 10px",
        border:"2px solid black",
        marginTop:"100px",
       boxShadow:"1px 10px 40px",
        outline:"none",
        cursor:"pointer",

    };
        return (
            <div className="Persons">

           <button style={buttonstyle}onClick={()=>{this.changestate("bindbutton")}}>switch names</button>
             <Person userinput={this.inputnmaechnage}  name={this.state.persons[0].name} age={this.state.persons[0].age} year={this.state.persons[0].year}/>
             <Person  userinput={this.inputnmaechnage2} clickperson={this.changestate.bind(this,"nuve")} name={this.state.persons[1].name} age={this.state.persons[1].age} year={this.state.persons[1].year}/>
             <Person name={this.state.persons[2].name} age={this.state.persons[2].age} year={this.state.persons[2].year}/>
             {this.state.country}
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
