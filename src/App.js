import './App.scss';
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import { useSelector } from 'react-redux';



function App() {

  const storeAmount = useSelector(state => state.storeAmount)
  // const [amount, setAmount] = useState(0);
  const [card_info , setCard_info] = useState({});

  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Home  setCard_info={setCard_info} storeAmount={storeAmount}/>} />
      <Route path="/info" element={<Info card_info={card_info} storeAmount={storeAmount}/>} />
      </Routes>
    </Router>  
    
    </div>
  );
}

export default App;
