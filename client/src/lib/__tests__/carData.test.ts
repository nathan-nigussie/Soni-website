import { describe, it, expect } from "vitest";
import { cars } from "../carData";

describe("Car Data", () => {
  it("should have exactly 10 cars", () => {
    expect(cars.length).toBe(10);
  });

  it("should have all required properties for each car", () => {
    cars.forEach((car) => {
      expect(car.id).toBeDefined();
      expect(car.make).toBeDefined();
      expect(car.model).toBeDefined();
      expect(car.year).toBeDefined();
      expect(car.price).toBeDefined();
      expect(car.mileage).toBeDefined();
      expect(car.image).toBeDefined();
      expect(car.color).toBeDefined();
      expect(car.transmission).toBeDefined();
      expect(car.fuelType).toBeDefined();
      expect(car.engine).toBeDefined();
      expect(car.description).toBeDefined();
    });
  });

  it("should have unique IDs", () => {
    const ids = cars.map((car) => car.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(cars.length);
  });

  it("should have valid prices (positive numbers)", () => {
    cars.forEach((car) => {
      expect(car.price).toBeGreaterThan(0);
      expect(typeof car.price).toBe("number");
    });
  });

  it("should have valid mileage (non-negative numbers)", () => {
    cars.forEach((car) => {
      expect(car.mileage).toBeGreaterThanOrEqual(0);
      expect(typeof car.mileage).toBe("number");
    });
  });

  it("should have valid years (between 2000 and 2030)", () => {
    cars.forEach((car) => {
      expect(car.year).toBeGreaterThanOrEqual(2000);
      expect(car.year).toBeLessThanOrEqual(2030);
    });
  });

  it("should have non-empty strings for make, model, and color", () => {
    cars.forEach((car) => {
      expect(car.make.length).toBeGreaterThan(0);
      expect(car.model.length).toBeGreaterThan(0);
      expect(car.color.length).toBeGreaterThan(0);
    });
  });

  it("should have valid transmission types", () => {
    const validTransmissions = ["Manual", "Automatic"];
    cars.forEach((car) => {
      expect(validTransmissions).toContain(car.transmission);
    });
  });

  it("should have valid fuel types", () => {
    const validFuelTypes = ["Gasoline", "Hybrid", "Electric", "Diesel"];
    cars.forEach((car) => {
      expect(validFuelTypes).toContain(car.fuelType);
    });
  });

  it("should have non-empty descriptions", () => {
    cars.forEach((car) => {
      expect(car.description.length).toBeGreaterThan(0);
    });
  });

  it("should have valid image URLs", () => {
    cars.forEach((car) => {
      expect(car.image.startsWith("http")).toBe(true);
    });
  });

  it("first car should be Toyota Camry", () => {
    expect(cars[0].make).toBe("Toyota");
    expect(cars[0].model).toBe("Camry");
  });

  it("last car should be Volkswagen Jetta", () => {
    expect(cars[9].make).toBe("Volkswagen");
    expect(cars[9].model).toBe("Jetta");
  });
});
