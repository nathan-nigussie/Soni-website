import { Car } from "@/lib/carData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Fuel, Gauge, Zap } from "lucide-react";
import { useLocation } from "wouter";

type CarStatus = "Sold" | "Negotiated" | "Reserved" | null;

interface CarCardProps {
  car: Car;
  status: CarStatus;
}

export default function CarCard({ car, status }: CarCardProps) {
  // inside your component
  const [, setLocation] = useLocation();

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(car.price);

  const formattedMileage = new Intl.NumberFormat("en-US").format(car.mileage);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-200">
        {status && (
          <Badge
            className="absolute top-3 left-3 z-10 text-base font-semibold"
            variant={status === "Sold" ? "destructive" : "default"}
          >
            {status}
          </Badge>
        )}
        <img
          src={car.images[0]}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={e => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=400&fit=crop";
          }}
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {car.year}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 p-4 flex flex-col">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-foreground">
            {car.make} {car.model}
          </h3>
          <p className="text-sm text-muted-foreground">{car.color}</p>
        </div>

        {/* Price */}
        <div className="mb-3">
          <p className="text-2xl font-bold text-primary">{formattedPrice}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Gauge className="w-4 h-4" />
            <span>{formattedMileage} KM</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Fuel className="w-4 h-4" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="w-4 h-4" />
            <span>{car.transmission}</span>
          </div>
          <div className="text-muted-foreground text-xs">{car.engine}</div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
          {car.description}
        </p>

        {/* View Details Button */}
        <Button
          className="w-full"
          variant="default"
          onClick={() => setLocation(`/car/${car.id}`)}
        >
          View Details
        </Button>
      </div>
    </Card>
  );
}
