export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
          Your Trusted Partner for Quality Vehicles, Since 2016
        </h2>
        <p className="text-lg mb-4">
          Founded in <strong className="text-primary">2016</strong>, we have
          grown to become a trusted new and used car dealer based in{" "}
          <strong className="text-primary">Finland</strong>. With nearly a
          decade of industry experience, our mission is simple: to provide
          high-quality, clean, and reliable vehicles to customers both locally
          and across the globe. We pride ourselves on delivering a{" "}
          <strong className="text-primary">
            smooth, hassle-free buying experience
          </strong>{" "}
          built on a foundation of transparency and trust.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
          Global Reach: Specializing in International Export
        </h2>
        <p className="text-lg mb-4">
          Our expertise extends far beyond the Finnish market. We have developed{" "}
          <strong className="text-primary">
            extensive experience in exporting vehicles from Europe to many
            African countries
          </strong>
          , including East, West, and North Africa. Whether you are a private
          buyer purchasing a single car or a business placing a bulk order, we
          are equipped to handle your needs with professionalism and efficiency.
        </p>
        <p className="text-lg mb-4">
          We understand the complexities of international logistics, which is
          why we take care of the entire process for you. Our comprehensive
          service includes:
        </p>
        <ul className="list-disc list-inside ml-4 text-lg space-y-2">
          <li>
            <strong className="text-primary">
              Shipping and Transportation:
            </strong>{" "}
            Arranging safe and timely transport for your vehicle.
          </li>
          <li>
            <strong className="text-primary">Documentation:</strong> Handling
            all necessary export and customs paperwork.
          </li>
          <li>
            <strong className="text-primary">Seamless Delivery:</strong>{" "}
            Ensuring a stress-free experience from our lot to your preferred
            port.
          </li>
        </ul>
        <p className="text-lg mt-4">
          For buyers looking for specific models, we also{" "}
          <strong className="text-primary">accept pre-orders</strong> and
          arrange direct shipment to your desired destination.
        </p>
      </section>

      <section className="mb-10 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Our Commitment
        </h2>
        <blockquote className="text-2xl italic font-medium text-center text-gray-700 dark:text-gray-300">
          "Quality vehicles, transparent service, and reliable delivery—every
          time."
        </blockquote>
        <p className="text-lg mt-4 text-center">
          Our commitment to our customers is the driving force behind everything
          we do. We look forward to helping you find your next vehicle.
        </p>
      </section>
    </div>
  );
}
