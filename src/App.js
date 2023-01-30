import './App.css';
import { getListItems } from './services/items.js';

function App() {
  return <div className="App">{getListItems()}</div>;
}

export default App;
