import { useState } from "react";
import emailjs from "@emailjs/browser";

export interface FormState {
  nombre: string;
  apellidos: string;
  telefono: string;
  email: string;
  codigoPais: string;
  mensaje: string;
}

export type Status = "idle" | "loading" | "success" | "error";

const INITIAL_STATE: FormState = {
  nombre: "",
  apellidos: "",
  telefono: "",
  email: "",
  codigoPais: "",
  mensaje: "",
};

export function useContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    const filters: Partial<Record<keyof FormState, RegExp>> = {
      nombre: /^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s]*$/,
      apellidos: /^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ\s]*$/,
      telefono: /^[0-9+\s]*$/,
    };

    const filter = filters[name as keyof FormState];
    if (filter && !filter.test(value)) return;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: `${form.nombre} ${form.apellidos}`,
          from_email: form.email,
          phone: `${form.codigoPais}${form.telefono.replace(/[\s+]/g, '')}`,
          message: form.mensaje,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  return { form, status, handleChange, handleSubmit, setStatus ,setForm};
}
