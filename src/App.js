/*
import {useState} from 'react';
import "./App.css";
import "./components/Navbar"
import Navbar from "./components/Navbar";

const data = {
  "👊": "✌️",
  "👋": "👊",
  "✌️": "👋",
};
const dataInArr = Object.keys(data);
function App() {
  function handleSelected(item) {
    const selectRandomItemNbr = Math.floor(Math.random() * dataInArr.length);
    const itemRandom = dataInArr[selectRandomItemNbr];
    printResult(item, itemRandom);
  }
  function printResult(itemPlayer, itemRandom) {
    if (itemPlayer === itemRandom) {
      return alert("Egalité");
    } else if (data[itemPlayer] === itemRandom) {
      return alert("Gagné")
    }
    alert("Perdu");
  }
  return (
    <div className="App">
      <div className="App-header">
        <Navbar/>
        <div className="content">
          {dataInArr.map((el) => (
            <div key={el} className="card" onClick={() => handleSelected(el)}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
*/

import './App.css';
import Input from './components/Input'
import {useState,useEffect} from 'react'


function App() {
  const [str,setStr]=useState("")
  useEffect(() => {
    
  setStr(localStorage.getItem("futurtitle"))
    
  }, [])
  
  return (
    
    <div className="App">
      <h1 className="title">{str}</h1>
      <Input onChanged={setStr}/>
    </div>
  );
}

export default App;