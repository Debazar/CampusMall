import './App.css';
import Heading from './heading/heading';
import Body from './body/body';
import Checkout from './Checkout/Checkout';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './Home';
import Login from './login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          
          <Route path = "/checkout" element={<Checkout/>}> </Route>

          <Route path = "/" element={<Home/>}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
