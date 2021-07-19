import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    setCartItems([...cartItems, item])
  }

  const removeItem = (item) => {
    const listaNueva = cartItems.filter((elemento => elemento.id === item.id));
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
            <CartContext.Provider value={{ addItem, removeItem, clear, isInCart }} >
              <ItemDetailContainer />
            </CartContext.Provider>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
