import React from "react";
import Item from "./Item";

function ItemList({ items, onRemove, onToggleBought }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemove={onRemove}
          onToggleBought={onToggleBought}
        />
      ))}
    </ul>
  );
}

export default ItemList;
