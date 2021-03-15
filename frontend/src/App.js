import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./screens/HomePage";
import LocationPage from "./screens/LocationPage";
import ProductFormPage from "./screens/ProductFormPage";
import ProductMovement from "./screens/ProductMovement";
import ProductPage from "./screens/ProductPage";

import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <ToastContainer />

          <Switch>
            <Route exact path="/product" component={ProductPage} />
            <Route exact path="/product/form" component={ProductFormPage} />
            <Route exact path="/location" component={LocationPage} />
            <Route exact path="/movement" component={ProductMovement} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
