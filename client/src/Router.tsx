import { Route, Switch } from "wouter";
import CarListing from "./pages/CarListing";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CarDetail from "./pages/CarDetail";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={CarListing} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/car/:id" component={CarDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;
