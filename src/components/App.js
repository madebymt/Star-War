import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
    constructor(props){
        super(props)
        this.handleNameChange = this.handleNameChange.bind();
        this.handleSubmit = this.handleSubmit.bind();
        this.state = {
            vehicles : [],
            value : " ",
            pilot :" "
        };
  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  }
   handleNameChange(event){
       //this value from the line 15
      this.setState({
          value:event.target.value
      })
  }


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

   handleSubmit(event){
       event.preventdefault();
       this.setstate({
           // form value from pilot, and after SUBMIT
           // then clear the form
           Pilot:this.state.name,
           pilot: " "
       })
   }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  // let URL = 'https://swapi.co/api/vehicles/';
  componentDidMount(){
      fetch('https://swapi.co/api/vehicles/')
      .then((response) => {
          return response.json()
      })
      .then((json) => {
        //   let vehicles = json.results;
          console.log("data fetch",json.results)
          this.setState({vehicles: json.results})
      })
  //Fetch from Star Wars api
  // Set 'vehicles' state
}


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer,
  // class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles.
  //consult the Bootstrap 4 docs for details.
  // Enter your code below:

//results from the api array we are trying to map.

/* render the state will change  and return the data won't change  */
  render() {
      const vehicles = this.state.vehicles.map(function(vehicles){
          return(
              < div className = "card-block" key = {vehicles.name}>
                  /* className set up are from Bootstrap default setting */
                      <div className="card">
                          <h4 className="card-title"> Name: {vehicles.name} </h4>
                          <h6 className="card-subtitle mb-2 text-muted"> Model: {vehicles.model} </h6>
                          <h4> Spec </h4>
                          <h4 className="card-title"> {vehicles.manufacturer} </h4>
                          <h6 className="card-subtitle mb-2 text-muted"> Class: {vehicles.vehicle_class} </h6>
                          <h6 className="card-subtitle mb-2 text-muted"> passenger:{vehicles.passengers} </h6>
                          <h6 className="card-subtitle mb-2 text-muted"> Crew: {vehicles.crew} </h6>
                          <h6 className="card-subtitle mb-2 text-muted"> Passengers:{vehicles.passengers} </h6>
                          <h6 className="card-subtitle mb-2 text-muted"> Crew:{vehicles.crew} </h6>
                          <h6 className="card-subtitle mb-2 text-muted"> Length:{vehicles.length} </h6>
                          <h6 className="card-subtitle mb-2 text-muted"> Speed:{vehicles.max_atmosphering_speed} </h6>
                          <h6 className="card-subtitle mb-2 text-muted"> Capacity:{vehicles.cargo_capacity} </h6>
                     </div>
              < /div>
          )

      })
   /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */

    return (
        < div className = "App">

                 <div className="jumbotron">
                     <h1 className="display-3">Star Wars</h1 > <hr className="my-4"/> < p className = "lead" > The Vehicles of Star Wars < /p>
                 </div>

                 <div className="card form">
                   <div className="card-block">
                       <h2 className="card-title">What is your name, pilot?</h2>
                     <form onSubmit={this.handleSubmit}>

                       <div className="form-group">
                           <input className="form-control col-md-4 offset-md-4" id="pilotName" onChange={this.handleNameChange} name="name" type="text" value={this.state.value} placeholder="Enter your name"/>
                       </div>

                       <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                    <h1>{this.state.pilot}</h1>

                  </div>
                </div>

                < div className = "row" >
                  {vehicles}
                < /div>

           < /div>


            /*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.

         */

    );
  }
}



export default App;
