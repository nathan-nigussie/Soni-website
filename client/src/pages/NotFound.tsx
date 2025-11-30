import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { Header } from "@/components/Header";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import CarListing from "@/pages/CarListing";
import CarDetail from "@/pages/CarDetail";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={CarListing} />
      <Route path={"/car/:id"} component={CarDetail} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    // You can add logic here to load analytics scripts, etc.
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    // You can add logic here to block analytics scripts, etc.
  };

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
            <CookieConsent onAccept={handleAccept} onDecline={handleDecline} />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
