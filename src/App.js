import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Room from './components/Room';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <div className='main-container'>
        <>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/room' component={Room} />
          </Switch>
        </>
      </div>
    </Router>
  );
}

export default App;
