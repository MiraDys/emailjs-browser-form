import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(form);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "XX",
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      alert("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="border-2 border-white rounded-xl p-4">
      <h2 className="text-2xl font-bold text-white">Let's talk</h2>
      <p className="text-gray-300 italic">
        if you want to build and innovate together
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col space-y-7"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="rounded-xl h-12 px-4 text-base text-white bg-gray-700/40 
            focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@doe.com"
            className="rounded-xl h-12 px-4 text-base text-white bg-gray-700/40
            focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="I want to build a web app that will ..."
            className="rounded-xl min-h-[120px] p-4 text-base text-white bg-gray-700/40
            focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y placeholder:text-gray-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
