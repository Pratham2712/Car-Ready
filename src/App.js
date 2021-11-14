//importin files
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Stats from "./Components/Stats/Stats";
//css
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Stats/>
    </div>
  );
}

export default App;
