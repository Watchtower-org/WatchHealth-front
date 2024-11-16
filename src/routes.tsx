import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { Home } from "./pages/Home";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Routes = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
      <Footer />
    </Router>
  );
};
