import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Router from "./Router"; // <- now exists

function App() {
  const handleAccept = () => localStorage.setItem("cookie_consent", "accepted");
  const handleDecline = () =>
    localStorage.setItem("cookie_consent", "declined");

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Header /> {/* Always visible */}
            <main className="flex-grow">
              <Router /> {/* Routes render here */}
            </main>
            <Footer /> {/* Always visible */}
            <CookieConsent onAccept={handleAccept} onDecline={handleDecline} />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
