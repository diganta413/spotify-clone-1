import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './Search';
import Home from './Home'
import Signup from "./Signup";
import Login from "./Login";
function App() {
  return (
    <>
    <Router>
       <Switch>

        <Route exact path="/">
        <Home />
        </Route>

         <Route path="/search">
         <Search />
         </Route>
         <Route path="/signup">
         < Signup />
         </Route>
         <Route path="/login">
         <Login />
         </Route>
       </Switch>
     </Router>
     </>
  );
}

export default App;
