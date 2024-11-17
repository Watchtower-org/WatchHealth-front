import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { NewsLetter } from "./pages/NewsLetter";

// import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";

export const Routes = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/newsletter/:email" element={<NewsLetter />} />
        <Route path="*" element={<Home />} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};
