import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import About from "./Pages/Home/About/About";
import Explores from "./Pages/Home/Explores/Explores";
import Home from './Pages/Home/Home/Home';
import PageNotFound from "./Pages/Home/PageNotFound/PageNotFound";
import Purchase from "./Pages/Purchase/Purchase";
import Login from "./Pages/Login/Login/Login";
import Registation from "./Pages/Login/Registation/Registation";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from './Pages/Shared/Navigation/Navigation';
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/explores">
            <Explores/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/registation">
            <Registation/>
            </Route>
          <PrivateRoute path="/purchase/:puchaseId">
              <Purchase/>
            </PrivateRoute>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
          <Route exact path="*">
            <PageNotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
