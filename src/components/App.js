import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
const API = "http://localhost:3001/sushis";

function App() {
const [sushis, setSushis] = useState([])
const [eatenSushi, setEatenSushi] = useState([])
const [money, setMoney]= useState(50)

function handleMoney(price) {
  setMoney(money - price)
}

function handleEatenSushi (sushi) {
  setEatenSushi([...eatenSushi, sushi])
}
useEffect(() => {
  fetch(API)
    .then(resp => resp.json())
    .then(sushis => setSushis(sushis)
)},[])

  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleEatenSushi={handleEatenSushi} handleMoney={handleMoney} money={money}/>
      <Table plates={eatenSushi} money={money}/>
    </div>
  );
}

export default App;
