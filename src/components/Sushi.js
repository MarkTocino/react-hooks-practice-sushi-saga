import React, { useState } from "react";

function Sushi( {name, price, img_url, handleEatenSushi, handleMoney, money } ) {
  const [eatenSushi, setEatenSushi] = useState(false)
function handleEatenSushis() {
  if ((money >= price) && eatenSushi === false) {
    setEatenSushi(true)
    handleEatenSushi(name)
    handleMoney(price)
}
else if ((money >= price) && eatenSushi === true){
     return alert("Your plate is empty")
   }
   else if (money < price) return alert("You're broke")
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatenSushis}>
        {eatenSushi  ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
