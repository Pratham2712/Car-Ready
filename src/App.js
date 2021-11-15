//importin files
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Stats from "./Components/Stats/Stats";
import Vehicles from "./Components/Vehicles/Vehicles";
import Advantage from "./Components/Advantage/Advantage";
//css
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Stats />
      <Vehicles />
      <Advantage/>
    </div>
  );
}

export default App;
