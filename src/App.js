
import './App.css';
import WeatherInfo from './Components/WeatherInfo';
import Login from './Components/Login';
import ThemeButton from './Components/ThemeButton';
import Navbar from './Components/Navbar';
import { Routes } from 'react-router';
import RoutesConatiner from './Routes/Routes';


function App() {
  return (
    <div className="App">
      {/* <WeatherInfo/> */}
      <Navbar/>

  
<RoutesConatiner/>

      {/* <Login/>
      <ThemeButton/> */}
    </div>
  );
}

export default App;
