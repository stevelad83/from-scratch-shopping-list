import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth.js';
// import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
