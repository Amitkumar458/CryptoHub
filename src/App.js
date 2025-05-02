import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import Coindetails from "./components/Coindetails";
import About from "./components/About";
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path={`/coin/:id`} element={<Coindetails/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;