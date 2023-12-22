import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
  return (
    <main className="bg-slate-300/20 h-[100%]">
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </main>
  );
}
