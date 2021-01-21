import './App.css';
// import "./vendors/bootstrap-grid.css"
import Navbar from "./Components/Navbar";
import RoomList from "./Components/RoomList"
import Footer from "./Components/Footer"


function App() {
  return (
    <div className="App">
       <Navbar/>
       <RoomList/>
       <Footer/>
    </div>
  );
}

export default App;
