import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
 
  
 
  render(){
    this.data=this.props.props
      console.log(this.data.props)

     

      let styleMydiv={
        display:"grid",
        gridTemplateColumns:"repeat(2,1fr)",
        marginLeft:"200px",
        
       }
    return(
      <>
      <h1 style={{textAlign:'center'}}>Kalvium Gallery</h1>
      <div style={styleMydiv}>
        <img src={this.data[0].img} alt="" width={"500px"}/>
        <img src={this.data[1].img} alt="" width={"500px"}/>
        <img style={{marginTop:"50px"}} src={this.data[2].img} alt="" width={"500px"}/>
        <img style={{marginTop:"50px"}} src={this.data[3].img} alt="" width={"500px"}/>
      </div>
      
      </>
    )
  }
}
