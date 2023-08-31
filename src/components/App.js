import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"
import { useState } from "react";

  export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    function onDarkModeClick() {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    }
      

  return (
    <div>
      <Header onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}


