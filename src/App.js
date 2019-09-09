import React, { Component } from 'react';
import './App.css';  

const myVehicles=[{type:['porsche','bmw','mc-larren','volvo','vw']},{type:['Toyota','lexus','mazda']}];
class App extends Component {

  constructor(props){
    super(props);
    this.state={myVehicles:myVehicles};
  }

  render() {
    return (
      <div className="App">
      <div id="header">
      <p>React Baby!</p>
      </div>
      <button type="button">Vehicles!</button>
      <div id="vehicles">
      {this.state.myVehicles.map(brand=>{
        return brand.type.map(item=>{
  return <p key={brand.type.indexOf(item)}>{item}</p>
      })
      })}
      </div>
      </div>
    );
  }
}

class Dennis extends React.Component{
  constructor(props){
    super(props);
    this.state={name:'Front-End',favourites:true}
    this.toggleFavourites=this.toggleFavourites.bind(this);
  }
  //toggle function
  toggleFavourites=()=>{
this.setState({favourites:!this.state.favourites}); //OR this.setState({state=>({favourites:!state.favourites})})
  }

  render(){
    return(
      <div className="myFavourites">
        <button id="togglerenderButton" onClick={()=>{this.toggleFavourites()}}>Render me!</button>
        <div>
         {this.state.favourites? 
         <p>{this.state.name}</p>:
         <p>Back-End</p> }
      </div>
      </div>
    )
  }
}
let phoneBrands=['samsung','apple','oppo','oneplus','blackberry','google-pixel','nokia']
 class Form extends React.Component{
   constructor(props){
     super(props);
     this.state={phoneBrands:phoneBrands};
     this.filter=this.filter.bind(this);
   }
   //filter function
   filter(event) {
    var updatedPhones=phoneBrands.filter(x=>{
       return (
         x.toLowerCase().search(event.target.value.toLowerCase()) !== -1
       )
      })
    //setstate
    this.setState({phoneBrands:updatedPhones})
   }
   render(){
     return (
       <div className="Form">
<form>
  <label>Enter:</label>
  <input onChange={(event)=>{this.filter(event)}} type="text" placeholder="filter..." name="filter"></input>
</form>
<div>
  {this.state.phoneBrands.map(x=>{
    return <p key={Math.random() * 100}>{x}</p>})}
</div>
       </div>
     )
   }
 }
export {App,Dennis,Form};
