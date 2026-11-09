import { notFound } from "next/navigation";
import { services } from "../../data/services";

function getService(id) {
  return services.find((service) => String(service.service_id) === id);
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = getService(id);

  if (!service) {
    notFound();
  }
  return {
    title: service.service_name,
    description: service.service_description,
  };
}

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  const service = getService(id);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <img
        src={service.service_image}
        className="w-200 h-100 object-cover rounded-3xl"
        alt={service.service_name}
      />
      <p className="mt-4">{service.service_name}</p>
      <p className="mt-4">{service.service_description}</p>
    </div>
  );
};

export default ServiceDetails;
