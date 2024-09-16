import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get('/api/inventory')
      .then((res) => setInventory(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {inventory.map(item => (
          <li key={item._id}>
            <h3>{item.productName}</h3>
            <p>Stock: {item.stockQuantity}</p>
            <p>Supplier: {item.supplier}</p>
            <p>Reorder Level: {item.reorderLevel}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
