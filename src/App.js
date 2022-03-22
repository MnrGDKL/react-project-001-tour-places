import './App.css';
import Header from "./Components/Header/Header";
import Card from "./Components/Cards/Card"
import { data } from "./Helper/Data"
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Card cards = {data}/>
    </div>
  )
}

export default App;
