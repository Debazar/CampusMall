import './App.css';
import Heading from './heading/heading';
import Body from './body/body';
import Checkout from './Checkout/Checkout';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path = "/checkout" element={<Checkout/>}> </Route>

          <Route path = "/" element={<Home/>}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
