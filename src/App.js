import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth.js';
import { useUser } from './context/UserContext.js';
import Tasks from './components/Tasks.js';

// import Header from './components/Header/Header.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Switch>
        {/* <Header /> */}
        <Route exact path="/auth/:type" component={Auth} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/tasks" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
