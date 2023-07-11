import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
function SushiContainer({ money, sushis, handleEatenSushis, handleEatenSushi, handleMoney }) {
const [sushiIndex, setSushiIndex] = useState(0)

function handleButtonClick ()  {
  setSushiIndex(sushiIndex + 4)
}

  const sushiList = sushis
  .slice(sushiIndex, sushiIndex + 4)
  .map ((sushi) => {
    return <Sushi money={money} handleMoney={handleMoney} handleEatenSushi={handleEatenSushi} handleEatenSushis={handleEatenSushis} key={sushi.id} {...sushi}/> 
  })
  return (
    <div className="belt">
      {sushiList}
      <MoreButton handleButtonClick={handleButtonClick}/>
    </div>
  );
}

export default SushiContainer;
