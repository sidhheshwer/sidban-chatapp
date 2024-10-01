
import './App.css';
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";
import {Toaster} from "react-hot-toast";


import Signin from './components/Signin.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import { useAuthContext } from './Context/AuthContext.js';




function App() {
  let {authUser}=useAuthContext();

  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact path="/" element={authUser?<Navigate to="/home"/>:<Signin/>}/>
          <Route exact path="/login" element={authUser?<Navigate to="/home"/>:<Login/>}/>
          <Route exact path="/home" element={authUser?<Home/>:<Navigate to="/login"/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </div>
  );
}

export default App;
