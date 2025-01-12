import { useState } from "react";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);

  async function startGame(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature"
      );

      if (!response.ok) {
        throw new Error("Could not fetch the data from API");
      }

      const data = await response.json();

      const dataSlice = getDataSlice(data);
      const emojisArray = getEmojisArray(dataSlice);

      setEmojisData(emojisArray);
      setIsGameOn(true);
    } catch (error) {
      console.error(error);
    }
  }

  function getDataSlice(data) {
    const randomIndices = getRandomIndices(data);

    const dataSlice = randomIndices.map((index) => data[index]);

    return dataSlice;
  }

  function getRandomIndices(data) {
    const randomIndicesArray = [];

    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * data.length);

      if (!randomIndicesArray.includes(randomNum)) {
        randomIndicesArray.push(randomNum);
      } else {
        i--;
      }
    }

    return randomIndicesArray;
  }

  function getEmojisArray(data) {
    const pairedEmojisArray = [...data, ...data];

    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [pairedEmojisArray[i], pairedEmojisArray[randomIndex]] = [
        pairedEmojisArray[randomIndex],
        pairedEmojisArray[i],
      ];
    }

    return pairedEmojisArray;
  }

  /**
   * Challenge:
   * 2) In the turnCard function, receive name and index as parameters and log them to the console.
   */

  function turnCard(name, index) {
    console.log("Memory card clicked");
  }

  return (
    <main>
      <h1>Memory</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
    </main>
  );
}
