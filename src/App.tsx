import ContactForm from "./components/contact-form";

function App() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h1 className="text-4xl font-bold text-white">
        Contact Form with EmailJs
      </h1>
      <ContactForm />
    </div>
  );
}

export default App;
