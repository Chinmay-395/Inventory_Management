import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./screens/HomePage";
import LocationPage from "./screens/LocationPage";
import ProductMovement from "./screens/ProductMovement";
import ProductPage from "./screens/ProductPage";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/product" component={ProductPage} />
          <Route path="/location" component={LocationPage} />
          <Route path="/movement" component={ProductMovement} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
