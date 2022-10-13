import { useState } from "react";

function RandomList() {
  const [addNumber, setAddNumber] = useState([]);
  let numberarray = [];
  const generateRandomNum = () => {
    const random = Math.floor(Math.random() * 100);
    // console.log(random);
    numberarray = [...addNumber, random];
    // console.log(numberarray);

    setAddNumber(numberarray);
  };

  return (
    <>
      <button onClick={generateRandomNum}>Get Random Number</button>
      <div>
        {addNumber.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </>
  );
}

export default RandomList;
