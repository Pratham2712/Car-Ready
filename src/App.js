//importin files
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Stats from "./Components/Stats/Stats";
import Vehicles from "./Components/Vehicles/Vehicles";
import Advantage from "./Components/Advantage/Advantage";
import Places from "./Components/Places/Places";
import Rent from "./Components/Rent/Rent";
//css
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Stats />
      <Vehicles />
      <Advantage />
      <Places />
      <Rent/>
    </div>
  );
}

export default App;
