import { Route, Switch, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

import CarListing from "./pages/CarListing";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CarDetail from "./pages/CarDetail";
import NotFound from "./pages/NotFound";

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={CarListing} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/car/:id" component={CarDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
