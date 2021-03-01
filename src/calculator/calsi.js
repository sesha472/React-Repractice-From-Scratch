

import React from 'react';


class Cal extends React.Component{

    state={
        a:1,
        b:1,
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
        return(
            <div>

            <input type="number" onChange={this.setA } placeholder="enter A number" />
            <input type="number" onChange={this.setB } placeholder="enter b number" />
           
            <button onClick={this.setshowresult}>click</button>
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