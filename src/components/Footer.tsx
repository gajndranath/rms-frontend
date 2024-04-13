// Import necessary component
import { Link } from "react-router-dom";

// Footer component renders the footer section of the application
const Footer = () => {
  return (
    <footer className="bg-rose-600 py-8">
      {" "}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {" "}
        <span className="text-2xl text-white font-bold tracking-tighter">
          DineNight
        </span>
        <span className="text-white text-sm font-bold tracking-tight flex gap-4">
          <Link to="/">Privacy Policy</Link>

          <Link to="/">Privacy Policy</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
