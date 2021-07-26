import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import { useState } from 'react';
import Cart from './components/Cart';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    let itemBuscar = cartItems.filter(element => element.item.id === item.item.id)[0]
    if (itemBuscar) {
      itemBuscar.quantity += item.quantity
      setCartItems([...cartItems])

    }
    else {
      setCartItems([...cartItems, item])
    }
  }

  const removeItem = (id) => {
    const listaNueva = cartItems.filter((element) =>
      element.item.id !== id);
    setCartItems(listaNueva);
  }

  const clear = () => {
    setCartItems([]);
  }

  const isInCart = (item) => {
    const itemBuscar = cartItems.filter(element => element.item.id === item.id)[0];
    if (itemBuscar) {
      return true
    }
    else {
      return false
    }
  }
  return (
    <div className="App">
      <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }} >
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer />
            </Route>
            <Route exact path='/category/:categoryId'>
              <ItemListContainer />
            </Route>
            <Route exact path='/item/:itemId'>
              <ItemDetailContainer />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
          </Switch>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
