import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Home />
      </Router>
    </div>
  );
}

export default App;
