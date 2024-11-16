import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { Home } from "./pages/Home";

// import { Header } from './components/Header';
// import { Footer } from './components/Footer';

// import { Container } from './components/Container';

export const Routes = () => {
  return (
    <Router>
      {/* <Container> */}
      {/* <Header /> */}
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
      {/* <Footer /> */}
      {/* </Container> */}
    </Router>
  );
};
