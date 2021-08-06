import React from 'react';
import axios from 'axios';


export default class Formulario extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      zipCode: 1000,
      area: 100,
      propertyType:'HOUSE',
      roomsNumber:0,
      propertySubtype:'',
      equippedKitchen: false,
      furnished: false,
      buildingState: 'JUST_RENOVATED',
      prediction:0
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.areaChange=this.areaChange.bind(this)
    this.zipCodeChange=this.zipCodeChange.bind(this)
    this.propertyTypeChange=this.propertyTypeChange.bind(this)
    this.roomsNumberChange=this.roomsNumberChange.bind(this)
    this.propertySubtypeChange=this.propertySubtypeChange.bind(this)
    this.equippedKitchenChange=this.equippedKitchenChange.bind(this)
    this.furnishedChange=this.furnishedChange.bind(this)
    this.buildingStateChange=this.buildingStateChange.bind(this)

  }


    handleSubmit(event) {
      event.preventDefault()
      console.log(this.state)
      // axios.post('https://salty-mesa-39646.herokuapp.com/predict', {"data": {"area":parseInt(this.state.area), "zip-code":parseInt(this.state.zipCode), "property-type":this.state.propertyType, "rooms-number":parseInt(this.state.roomsNumber)}})
      axios.post('https://solan-api-l28kr.ondigitalocean.app/predict', {"data": {"area":parseInt(this.state.area), "zip-code":parseInt(this.state.zipCode), "property-type":this.state.propertyType, "rooms-number":parseInt(this.state.roomsNumber), "property-subtype":this.state.propertySubtype}})
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
    propertySubtypeChange(event) {
      this.setState({propertySubtype: event.target.value})
    }
    equippedKitchenChange(event) {
      this.setState({equippedKitchen: event.target.value})
    }
    furnishedChange(event) {
      this.setState({furnished: event.target.value})
    }
    buildingStateChange(event) {
      this.setState({buildingState: event.target.value})
    }

    
    render() {
      /* PREDICT DETAILS*/
      let button;
      if (this.state.prediction === 0) {
        button = <p>Please fill out the form</p>
      }else{
        button = <div className="pricedisplay"><p>Your prediction is : {this.state.prediction} €...  Try again !</p></div>
      }

      return (
        <div> 

        <form method='POST' className="row g-3" onSubmit={this.handleSubmit}>
          <div className="required row g-3"> {/* BEGIN of REQUIRED FIELDS */}
          <small className="text-danger">REQUIRED FIELDS :</small>

            <div className="col-md-3">
              <label htmlFor="propertyType" className="form-label">Property type: </label>
              <select className="userreq" id="propertyType" required="" onChange={this.propertyTypeChange}>
                <option value="HOUSE">HOUSE</option>
                <option value="APARTMENT">APARTMENT</option>
              </select>
            </div>

            <div className="col-md-3">
              <label htmlFor="zipCode" className="form-label">Zip-code: </label>
              <input className="userreq" type="number" maxLength="4" id="zipCode" placeholder="Zip code: 0000" pattern="\d{4}" required="" onChange={this.zipCodeChange}/>
            </div>

            <div className="col-md-3">
              <label htmlFor="area" className="form-label">Area: </label>
              <input className="userreq" type="number" id="area" placeholder="surface m²" required="" onChange={this.areaChange}/>
            </div>

            <div className="col-md-2">
              <label htmlFor="roomsNumber" className="form-label">Rooms: </label>
              <select className="userreq" id="roomsNumber" required="" onChange={this.roomsNumberChange}>
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
            </div>
          
          </div> {/* END of REQUIRED FIELDS */}


          <div className="optional row g-3"> {/* BEGIN of OPTIONAL FIELDS */}
          <small className="text-body">OPTIONAL FIELDS :</small>

            <div className="col-md-3">
                <label htmlFor="propertySubtype" className="form-label">Property subtype: </label>
                <select className="userreq" id="propertySubtype" onChange={this.propertySubtypeChange}>
                  <option value="null"></option>
                  <option value="VILLA">VILLA</option>
                  <option value="FERME">FERME</option>
                  <option value="IMMEUBLE">IMMEUBLE</option>
                </select>
            </div>

            <div className="col-md-3">
            <label htmlFor="equippedKitchen" className="form-label">Equipped kitchen: </label>

              <div className="form-radio" onChange={this.equippedKitchenChange}>
                <input className="form-radio-input" type="radio" value="True"  name="equippedKitchen"/>
                <label className="form-radio-label" htmlFor="withequippedKitchen"> With </label>

                <input className="form-radio-input" type="radio" value="False" name="equippedKitchen"/>
                <label className="form-radio-label" htmlFor="withoutequippedKitchen"> Without </label>
              </div>
            </div>

            <div className="col-md-3">
            <label htmlFor="furnished" className="form-label">Furnished: </label>

              <div className="form-radio" onChange={this.furnishedChange}>
                <input className="form-radio-input" type="radio" value="True"  name="Furnished"/>
                <label className="form-radio-label" htmlFor="yesFurnished"> Yes </label>

                <input className="form-radio-input" type="radio" value="False" name="Furnished"/>
                <label className="form-radio-label" htmlFor="noFurnished"> No </label>
              </div>
            </div>

            <div className="col-md-3">
                <label htmlFor="buildingState" className="form-label">Building-state: </label>
                <select className="userreq" id="buildingState" onChange={this.buildingStateChange}>
                  <option value="null"></option>
                  <option value="NEW">NEW</option>
                  <option value="GOOD">GOOD</option>
                  <option value="TO_RENOVATE">TO RENOVATE</option>
                  <option value='JUST_RENOVATED'>JUST RENOVATED</option>
                  <option value='TO_REBUILD'>TO REBUILD</option>
                </select>
            </div>
            
            </div> {/* END of OPTIONAL FIELDS */}            


          <input type="submit" />
        </form>
        
        {/* PREDICTION */}
        {button}

        {/* END of RETURN */}
        </div>
      );  

    }
    
  }