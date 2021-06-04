import './App.css';
import Home from './Home.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Route exact path="/portfolio">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
