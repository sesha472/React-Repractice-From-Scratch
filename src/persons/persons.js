
import React from 'react';
import Person from '../person/person.js';

class Persons extends React.Component{
    state={
        persons:[
            {name:"sai1",age:"27", year:"1992"},
            {name:"sai2",age:"27", year:"1993"},
            {name:"sai3",age:"29", year:"1994"},
        ],
        country:"indian",
        showitems:false
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

   togglepersons=()=>{
    this.setState({showitems:!this.state.showitems})
  };

  inputnamechange=(event)=>{
this.setState({
    persons:[
        {name:event.target.value ,age:"27", year:"1992"},
        {name:"sai5",age:"27", year:"1993"},
        {name:"sai6",age:"29", year:"1994"},
      ],
})
  };
  inputnamechange2=(event)=>{
    this.setState({
        persons:[
            {name:"sai4" ,age:"27", year:"1992"},
            {name:event.target.value, age:"27", year:"1993"},
            {name:"sai6",age:"29", year:"1994"},
          ],
    })
      };
      inputnamechange3=(event)=>{
        this.setState({
            persons:[
                {name:"sai4" ,age:"27", year:"1992"},
                {name:"sai6",age:"29", year:"1994"},
                {name:event.target.value, age:"27", year:"1993"},
              ],
        })
          };

  render(){   

    const buttonstyle={

        backgroundColor:"yellow",
        padding:"5px 10px",
        border:"2px solid black",
        marginTop:"40px",
       boxShadow:"1px 10px 40px",
        outline:"none",
        cursor:"pointer",

    };
        return (
            <div className="Persons">

           <button style={buttonstyle} onClick={()=>{this.changestate("buttonsai4")}}>switch names</button>
         <br/>
         <button style={buttonstyle} onClick={this.togglepersons}>result</button>
         <br/>
          {(this.state.showitems)?(
           <div>
             <Person userinput={this.inputnamechange}  name={this.state.persons[0].name} age={this.state.persons[0].age} year={this.state.persons[0].year}/>
             <Person  userinput={this.inputnamechange2} clickperson={()=>{this.changestate("nuve")}} name={this.state.persons[1].name} age={this.state.persons[1].age} year={this.state.persons[1].year}/>
             <Person userinput={this.inputnamechange3} name={this.state.persons[2].name} age={this.state.persons[2].age} year={this.state.persons[2].year}/>
             {this.state.country}
             </div>):("click the button to see result") }


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
