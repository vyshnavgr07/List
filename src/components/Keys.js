import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const products = [
  { id: 1, name: 'laptop', brand: 'dell', Qty: 1 },
  { id: 2, name: 'laptop', brand: 'hp', Qty: 1 },
  { id: 3, name: 'laptop', brand: 'asus', Qty: 1 },
];

const Keys = () => {
  const [items, setItems] = useState(products);

  const changeQty = (id) => {
    const newItems = items.map((x) =>
      x.id === id ? { ...x, Qty: x.Qty + 1 } : x
    );

    setItems(newItems);
  };

  return (
    <div>
      {items.map((x) => (
        <div className="bg-success text-white m-4" key={x.id}>
          <h1>{x.name}</h1>
          <h3>{x.brand}</h3>
          <h4>{x.Qty}</h4>
          <Button variant="primary" onClick={() => changeQty(x.id)}>
            +
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Keys;
