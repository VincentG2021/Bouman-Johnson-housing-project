import logo from './220px-Wheel_of_Fortune_Round.png';
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
    <div>
      <p>This is a version of Immo-Eliza App. <br/> Code sources : 
        <br/>
          <a href="https://github.com/delvsola/challenge-api-deployment">Delvsola (AI)</a> 
        <br/>
          <a href="https://github.com/VincentG2021/Bouman-Johnson-housing-project">VincentG2021 (Front End)</a>
      </p>
    </div>
      <Formulario />
    </>
    </div>
  );
}

export default App;
