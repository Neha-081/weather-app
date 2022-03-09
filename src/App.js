
import './App.css';
import WeatherInfo from './Components/WeatherInfo';
import Login from './Components/Login';
import ThemeButton from './Components/ThemeButton';

function App() {
  return (
    <div className="App">
      {/* <WeatherInfo/> */}
      <Login/>
      <ThemeButton/>
    </div>
  );
}

export default App;
