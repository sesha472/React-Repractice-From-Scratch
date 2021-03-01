

import React from 'react';


class Cal extends React.Component{

    state={
        a:0,
        b:0,
   showresult:false
    }


    setA=(e)=>{
        this.setState({
            a: parseInt(e.target.value),
            showresult:false
        
        });
        };
        setB=(e)=>{
            this.setState({b: parseInt(e.target.value),
                showresult:false
            });
            };

            setshowresult=()=>{
                this.setState(old=>{
                return {showresult : !old.showresult};

                });

            };

    render(){
        const inputstyle={
                backgroundColor:"skyblue",
                padding:" 10px",
                outline:"none",
                border:"none",
                borderRadius:"5px",
                margin :"5px",
            
        };
        const buttonstyle={
            backgroundColor:"yellow",
            padding:"5px 40px",
            border:"2px solid black",
            margin:"10px",
           boxShadow:"1px 10px 40px",
            outline:"none",
            cursor:"pointer",
    
        };
        return(
            <div>

            <input style={inputstyle} type="number" onChange={this.setA } placeholder="enter A number" />
            <input style={inputstyle} type="number" onChange={this.setB } placeholder="enter b number" />
           <br/>
            <button style={buttonstyle} onClick={this.setshowresult}>click</button>
         {(this.state.showresult)?(
            <div className="result">
                A : {this.state.a} B : {this.state.b}
                <br/>
            {"ADD : " +(this.state.a+this.state.b)}  
                <br/>
            {"SUB : " +(this.state.a-this.state.b)}  
                <br/>
            {"MUL : " +this.state.a*this.state.b}  
                <br/>
            {"DIV : " +this.state.a/this.state.b}  
            </div>):(<div>click  the buttoon</div>)
    }
            </div>
            
            )
    }

}


export default Cal;