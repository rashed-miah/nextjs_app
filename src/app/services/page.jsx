import React from "react";
import { services } from "../data/services";
import Link from "next/link";
export const metadata = {
  title: "Services",
  description: "This is Services page of the website of nextJS",
};

const ServicesPage = () => {
  console.log("here is the services: ", services);
  return (
    <div>
      <h1 className="text-2xl">service page </h1>

      <div className="grid md:grid-cols-3 lg: grid-cols-3 gap-4">
        {services.map((s) => (
          <Link href={`/services/${s.service_id}`} key={s.service_id}>
            <img
              src={s.service_image}
              className="h-48 w-full rounded-lg object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
