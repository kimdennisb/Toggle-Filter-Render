import React, { Component } from 'react';
import './App.css';  

const myVehicles=[{type:['porsche','bmw','mc-larren','volvo','vw']},{type:['Toyota','lexus','mazda']}];
class Render extends Component {

  constructor(props){
    super(props);
    this.state={myVehicles:myVehicles};
  }

  render() {
    return (
      <div className="App">
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

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state={name:'yay!,howdy engineers:)',favourites:true}
    this.toggleFavourites=this.toggleFavourites.bind(this);
  }
  //toggle function
  toggleFavourites=()=>{
this.setState({favourites:!this.state.favourites}); //OR this.setState({state=>({favourites:!state.favourites})})
  }

  render(){
    return(
      <div className="myFavourites">
      
        <button id="togglerenderButton" onClick={()=>{this.toggleFavourites()}}>Toggle and flip me!</button>
        
        <div>
         {this.state.favourites ? 
         <p>{this.state.name}</p> :
         <p>Pretty fine fellow developer</p> }
      </div>
      </div>
    )
  }
}
let phoneBrands=['samsung','apple','oppo','oneplus','blackberry','google-pixel','nokia']
 class Filter extends React.Component{
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
  <input onChange={(event)=>{this.filter(event)}} type="text" placeholder="Filter..." name="filter"></input>
</form>
<div>
  {this.state.phoneBrands.length < 1 ? <p>Dang!,no results:(</p> :
  this.state.phoneBrands.map(x=>{
    return <p key={Math.random() * 100}>{x}</p>})
  }
</div>
       </div>
     )
   }
 }
 class Mainapp extends React.Component {
  constructor(props){
  super(props);
  this.myOption=this.myOption.bind(this);
  this.state={optionsArray:<Toggle />};
}
myOption(e){
if(e.target.value === 'Toggle'){
  this.setState({optionsArray:<Toggle />})
}else if(e.target.value === 'Render'){
  this.setState({optionsArray:<Render />})
}else{
  this.setState({optionsArray:<Filter />})
}
}

componentDidUpdate(){
console.log('state updated');
}
   render(){
     return (
       <div>
         <div className="title">
       <p>Amazing React</p>
       </div>
       <div className="MainApp">
       <select onChange={(e)=>{this.myOption(e)}}>
         <option>Toggle</option>
         <option>Render</option>
         <option>Filter</option>
       </select>
         <p>{this.state.optionsArray}</p> 
</div>
       </div>
     );
   }
 }
export {Mainapp};
