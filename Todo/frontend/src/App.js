
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';

import { TodoWrapper } from './Components/TodoWrapper';
function App() {
  return (
    <Router>
              <div className="App">
                  <Routes>
                      <Route
                          exact
                          path="/"
                          element={<LoginPage/>}
                      ></Route>
                      <Route
                          exact
                          path="/Register"
                          element={<Register />}
                      ></Route>
                      <Route
                          exact
                          path="/TodoW"
                          element={<TodoWrapper />}
                      ></Route>
                
                  </Routes>
              </div>
          </Router>
   
  );
}

export default App;
