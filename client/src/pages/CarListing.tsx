import { cars } from "@/lib/carData";
import CarCard from "@/components/CarCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function CarListing() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter(car => {
    const searchLower = searchTerm.toLowerCase();
    return (
      car.make.toLowerCase().includes(searchLower) ||
      car.model.toLowerCase().includes(searchLower) ||
      car.color.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Fixed to use primary color and match Home.tsx */}
      <div className="bg-primary/10 py-8 md:py-12">
        <div className="container max-w-6xl text-center">
          <h1 className="text-3xl font-bold mb-2 text-primary">Car Listings</h1>
          <p className="text-muted-foreground text-lg">
            Browse our selection of quality vehicles
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-6xl py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by make, model, or color..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCars.length} of {cars.length} vehicles
          </p>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} status={car.status} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No cars found matching your search.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="text-primary hover:underline mt-2"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
