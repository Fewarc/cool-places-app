import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Main} />
      </div>
    </Router>
  );
}

export default App;
