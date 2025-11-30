import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";

/**
 * Home page with hero section and features
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section - Narrowed and Color-Matched */}
        <section className="bg-primary/10 py-8 md:py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl mx-auto mb-4">
                CL
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                Browse Our Selection
              </h1>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View All Listings
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
                <p className="text-muted-foreground">
                  Browse through hundreds of quality vehicles from trusted
                  dealers.
                </p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="text-muted-foreground">
                  Get competitive pricing and transparent deals on all our
                  vehicles.
                </p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-muted-foreground">
                  Our team is here to help you find the perfect car for your
                  needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
