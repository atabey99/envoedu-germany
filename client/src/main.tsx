import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import emailjs from "@emailjs/browser";

// EmailJS'i başlat
emailjs.init("nSk-BeJXUhXBUfwmY");

createRoot(document.getElementById("root")!).render(<App />);
