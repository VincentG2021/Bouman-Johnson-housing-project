import React from 'react';
import axios from 'axios';


export default class Formulario extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      zipCode: 1000,
      area: 100,
      propertyType:'HOUSE',
      roomsNumber:2,
      prediction:0
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.areaChange=this.areaChange.bind(this)
    this.zipCodeChange=this.zipCodeChange.bind(this)
    this.propertyTypeChange=this.propertyTypeChange.bind(this)
    this.roomsNumberChange=this.roomsNumberChange.bind(this)
  }


    handleSubmit(event) {
      event.preventDefault()
      console.log(this.state)
      axios.post('https://salty-mesa-39646.herokuapp.com/predict', {"data": {"area":parseInt(this.state.area), "zip-code":parseInt(this.state.zipCode), "property-type":this.state.propertyType, "rooms-number":parseInt(this.state.roomsNumber)}})
      .then(response=>{
        console.log(response.data.prediction)
        this.setState({prediction: response.data.prediction})
      })
    }
    areaChange(event) {
      this.setState({area: event.target.value}) 
    }
    zipCodeChange(event) {
      this.setState({zipCode: event.target.value})
    }
    propertyTypeChange(event) {
      this.setState({propertyType: event.target.value})
    }
    roomsNumberChange(event) {
      this.setState({roomsNumber: event.target.value})
    }

    render() {
      let button;
      if (this.state.prediction === 0) {
        button = <p>Please fill out the form</p>
      }else{
        button = <p className="pricedisplay">Your prediction is {this.state.prediction} </p>
      }

      return (
        <div>

        <form method='POST' onSubmit={this.handleSubmit}>
          <input className="userreq" type="number" placeholder="zip-code" onChange={this.zipCodeChange}/>
          <input className="userreq" type="number" placeholder="area" onChange={this.areaChange}/>
          <select onChange={this.propertyTypeChange}>
            <option value="HOUSE">HOUSE</option>
            <option value="APARTMENT">APARTMENT</option>
          </select>
          <select onChange={this.roomsNumberChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
    
          <input type="submit" />
        </form>
        {button}
        </div>
      );  

    }
    
  }