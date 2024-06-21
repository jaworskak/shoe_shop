import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

function Services() {
  return (
    <section className="max-container flex jistufy-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
}

export default Services;
