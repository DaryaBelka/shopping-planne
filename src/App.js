import React, { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import ItemList from "./components/ItemList";
import HomePage from './components/HomePage';
import './App.css';

function App() {
  const loadItemsFromLocalStorage = () => {
    const savedItems = localStorage.getItem('shoppingItems');
    return savedItems ? JSON.parse(savedItems) : [];
  };

  const [items, setItems] = useState(loadItemsFromLocalStorage());
  const [showShoppingPage, setShowShoppingPage] = useState(false);

  const handleGoShopping = () => {
    setShowShoppingPage(true);
  };

  const addItem = (item) => {
    const newItems = [
      ...items,
      { ...item, id: Date.now(), bought: false },
    ];
    setItems(newItems);
    localStorage.setItem('shoppingItems', JSON.stringify(newItems));
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('shoppingItems', JSON.stringify(updatedItems));
  };

  const toggleBought = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, bought: !item.bought } : item
    );
    setItems(updatedItems);
    localStorage.setItem('shoppingItems', JSON.stringify(updatedItems));
  };

  return (
    <div>
      {!showShoppingPage ? (
        <HomePage onGoShopping={handleGoShopping} />
      ) : (
        <div className="shopping-container">
          <h1>Shopping Planner</h1>
          <AddItemForm onAddItem={addItem} />
          <ItemList
            items={items}
            onRemove={removeItem}
            onToggleBought={toggleBought}
          />
        </div>
      )}
    </div>
  );
}

export default App;
