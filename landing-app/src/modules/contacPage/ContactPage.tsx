import ContactForm from "./components/ContactForm.tsx";
import { LocationSection }  from "../../shared/locationSection/LocationSection.tsx";

export default function ContactPage() {
  return (
    <div>
      <ContactForm />
      <LocationSection />
    </div>
  );
}