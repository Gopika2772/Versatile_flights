


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Auth/Login";
import Main from "./pages/Main/Main";
import Register from './pages/Auth/Register';
import Home from './pages/Home/Home';


const App = () => {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>

      </Routes>
    </Router>
  );
};

export default App;
