import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../../models/Fox";
import Loader from "../../components/Loader";
import useAlert from "../../hooks/useAlert";
import Alert from "../../components/Alert";
import { motion } from "framer-motion";
import { logolinkedin, logowhatsapp } from "../../assets/icons";

const ContactPage = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Antonio",
          from_email: form.email,
          to_email: "antoniovsb25@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setCurrentAnimation("idle");
        setLoading(false);
        console.error("something went wrong", error);
        showAlert({
          show: true,
          text: "I did not receive your message =(",
          type: "danger",
        });
      });
  };

  return (
    <motion.section
      className="relative flex lg:flex-row flex-col max-container h-[100vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch by email</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your message
            <textarea
              name="message"
              className="textarea"
              placeholder="How can I help you?"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <div className="flex flex-row text-slate-500 items-center gap-4 mt-6">
          <p>Or send me a message in:</p>
          <a
            href="https://www.linkedin.com/in/antonio-victor-basilio/"
            target="_blank"
            rel="noopener"
          >
            <img
              src={logolinkedin}
              className="w-10 h-10 object-contain cursor-pointer"
            />
          </a>
          <img
            src={logowhatsapp}
            className="w-10 h-10 object-contain cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <Fox
            currentAnimation={currentAnimation}
            position={[0.5, 0.35, 0]}
            rotation={[12.6, -0.6, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default ContactPage;
