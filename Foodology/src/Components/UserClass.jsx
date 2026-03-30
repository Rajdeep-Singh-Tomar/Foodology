import React from "react";

class UserClass extends React.Component{

  constructor(props){
   super(props)
   
   this.state={
    count:0,
    count2:2,
   }
  }
      render(){
        return(
          <div className="user-card">
              <h1>Name:{this.props.name}</h1>
              <h1>count:{this.state.count}</h1>
              <button onClick={()=>{
                this.setState({
                  count:this.state.count+1
              })
              }}>click</button>
             
                <h2>Locality:Morena</h2>
                <h3>id:Rajdeepsingh</h3>
            </div>
        )
      }
} 

export default UserClass;