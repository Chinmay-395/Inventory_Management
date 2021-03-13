import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./screens/HomePage";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
