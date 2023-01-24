import { useEffect, useState } from "react";
import "./App.css";
import AppInfo from "./components/AppInfo";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [cardArray, setCardArray] = useState([]);

  // useEffect hook that retrieves the cardArray from localStorage on mount
  useEffect(() => {
    if (localStorage.getItem("cardArray")) {
      const localCardArray = JSON.parse(localStorage.getItem("cardArray"));
      setCardArray(localCardArray);
    }
  }, []);

  // function that adds a new card to the cardArray and localStorage
  const addNewCard = () => {
    let isUniqueNumber = false;
    let id = 0;
    let cardNumber = 0;
    while (isUniqueNumber === false && cardArray.length !== 1000) {
      id = Date.now() + Math.floor(Math.random() * 100) + 1;
      cardNumber = Math.floor(Math.random() * 1000) + 1;
      const test = cardArray.filter((card) => card.number === cardNumber);
      if (test.length === 0) {
        isUniqueNumber = true;
      }
    }
     // if the max number of cards is reached, display an alert
    if (cardArray.length === 1000) {
      alert("Max number of cards");
    } else {
      const newCard = { id: id, number: cardNumber };
      setCardArray([...cardArray, newCard]);
      localStorage.setItem(
        `cardArray`,
        JSON.stringify([...cardArray, newCard])
      );
    }
  };
  // function that deletes a card from the cardArray and localStorage
  const deleteCard = (card) => {
    const newCardArray = cardArray.filter((el) => el.number !== card.number);
    setCardArray(newCardArray);
    localStorage.setItem(`cardArray`, JSON.stringify([...newCardArray]));
  };
  // function that sorts the cardArray and updates localStorage
  const sortCardArray = () => {
    const sortedCardArray = cardArray.slice().sort(function (a, b) {
      return a.number - b.number;
    });
    setCardArray(sortedCardArray);
    localStorage.setItem(`cardArray`, JSON.stringify([...sortedCardArray]));
  };

  return (
    <div className="App">
      <div className="header_container">
        <Header addNewCard={addNewCard} sortCardArray={sortCardArray} />
      </div>
      <div className="main">
        <CardList cardArray={cardArray} deleteCard={deleteCard} />
        <AppInfo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
