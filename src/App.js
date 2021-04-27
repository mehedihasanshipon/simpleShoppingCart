
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import data from './data'
import { useState } from 'react';

function App() {
  const {products} = data;
  const [cartItems,setCartItems] = useState([]);
  // Add Cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  // Remove from cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div >
      <Header cartCounter ={cartItems.length} />
      <Main products={products} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
}

export default App;
