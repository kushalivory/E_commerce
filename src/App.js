import './App.scss';
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import NewProduct from './components/NewProduct/NewProduct';
import Edit from './components/MainComponent/Edit/Edit';
import Delete from './components/MainComponent/Delete/Delete';
// import { useSelector } from 'react-redux';



function App() {

  // const storeAmount = useSelector(state => state?.reducer)
  const [card_info , setCard_info] = useState({});
  const [editCard,setEditCard] = useState();

  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Home  setCard_info={setCard_info} setEditCard={setEditCard} />} />
      <Route path="/info" element={<Info card_info={card_info} />} />
      <Route path="/newProduct" element={<NewProduct/>} />
      <Route path="/edit" element={<Edit editCard={editCard} />} />
      <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>  
    
    </div>
  );
}

export default App;
