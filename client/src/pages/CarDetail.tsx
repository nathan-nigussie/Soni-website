import { cars } from "@/lib/carData";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Fuel, Gauge, Zap, Palette, Cog } from "lucide-react";
import { useState } from "react";

export default function CarDetail() {
  const [match, params] = useRoute("/car/:id");

  if (!match) {
    return null;
  }

  const car = cars.find(c => c.id === parseInt(params!.id as string));
  const [activeImage, setActiveImage] = useState(car?.images[0] || "");

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Car Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The car you're looking for doesn't exist.
          </p>
          <Link href="/" asChild>
            <Button>Back to Listings</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",

    maximumFractionDigits: 0,
  }).format(car.price);

  const formattedMileage = new Intl.NumberFormat("en-US").format(car.mileage);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="container max-w-4xl">
          <Link href="/" asChild>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary/80 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Listings
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">
            {car.make} {car.model}
          </h1>
          <p className="text-primary-foreground/80">{car.year} Model</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden bg-gray-200 mb-4">
              <img
                src={activeImage}
                alt={`${car.make} ${car.model} - Main View`}
                className="w-full h-96 object-cover transition-opacity duration-300"
                onError={e => {
                  e.currentTarget.src =
                    "https://drive.google.com/uc?export=view&id=19NrY-uwMZGeE8g0aYd-6DzJxeqNRR3YD";
                }}
              />
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-2">
              {car.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                    image === activeImage
                      ? "border-primary ring-2 ring-primary/50"
                      : "border-transparent hover:border-muted-foreground"
                  }`}
                  onClick={() => setActiveImage(image)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-card rounded-lg p-6 border border-border mt-6">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                About This Vehicle
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                {car.description}
              </p>

              {/* Specifications */}
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Gauge className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Mileage</p>
                    <p className="font-semibold text-foreground">
                      {formattedMileage} Kilometer
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Fuel className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Fuel Type</p>
                    <p className="font-semibold text-foreground">
                      {car.fuelType}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Transmission
                    </p>
                    <p className="font-semibold text-foreground">
                      {car.transmission}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cog className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Engine</p>
                    <p className="font-semibold text-foreground">
                      {car.engine}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Palette className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Color</p>
                    <p className="font-semibold text-foreground">{car.color}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Price and Actions */}
          <div>
            <div className="bg-card rounded-lg p-6 border border-border sticky top-8">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Price</p>
                <p className="text-4xl font-bold text-primary">
                  {formattedPrice}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Seller
                </Button>
              </div>

              {/* Quick Info */}
              <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4 text-sm">
                <p className="font-semibold text-foreground mb-2">Quick Info</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Inspected & Certified</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
