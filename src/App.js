import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
