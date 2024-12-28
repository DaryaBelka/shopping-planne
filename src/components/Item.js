import React from "react";

function Item({ item, onRemove, onToggleBought }) {
  return (
    <li>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          checked={item.bought}
          onChange={() => onToggleBought(item.id)}
          style={{
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />
        <span style={{ color: item.bought ? "#777" : "#000" }}>
          {item.name} - {item.quantity}
        </span>
      </div>
      <div className="button-group">
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </li>
  );
}

export default Item;
