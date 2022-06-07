// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate
} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {
  return (
   <Router>
     <Routes>
     <Route exact path="/" element={<Home/>}></Route>
     </Routes>
   </Router>
  );
}

export default App;
