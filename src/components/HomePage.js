import React from "react";
import './HomePage.css';

function HomePage({ onGoShopping }) {
  return (
    <div className="homepage-container">
      <div className="homepage-inner">
        <h1>Welcome to Your Shopping Planner</h1>
        <p>
          Organize your shopping list easily and efficiently. Start planning your
          shopping today and stay organized!
        </p>
        <button onClick={onGoShopping}>Let's Go!</button>
      </div>
    </div>
  );
}

export default HomePage;
