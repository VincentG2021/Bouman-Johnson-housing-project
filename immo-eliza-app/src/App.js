import logo from './mouettenobg.png';
import './App.css';
import Formulario from './Components/Formulario';



function App() {

// FETCH avec immo-Eliza API
  // fetch('https://salty-mesa-39646.herokuapp.com/predict', {
  //       method: 'POST', // or 'PUT'
  //       mode: 'cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ "data": {"zip-code": 4000, "area": 100, "property-type": 'APARTMENT', "rooms-number": 2, "property-subtype": 'VILLA'}}),

  //     })
  //     .then(response => response.json())

  //     .then(data => {
  //       console.log('Success:', data);
  //       // console.log(response)
  //     })
  //     .catch((error) => {
  //         console.error(error)
  //     });

  return (
    <div className="App">
      <header className="App-header">
      <div className='spiralContainer'>
        <div className='spiral'>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      </header>
    <>
      <Formulario />
    </>
    </div>
  );
}

export default App;
