import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
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
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
