// Import necessary components
import { Link } from "react-router-dom";
import MobNav from "./MobNav";
import MainNav from "./MainNav";
import logo from "../assets/logo1.png";

// Header component renders the header section of the application
const Header = () => {
  return (
    <header className="container max-auto px-10">
      {" "}
      <div className="border-b-2 border-b-gray-200 py-5 flex justify-between items-center">
        {" "}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="DineNight Logo"
            className="size-16 object-contain mr-2"
          />
          <span className="text-2xl font-bold tracking-tight text-rose-500">
            {" "}
            DineNight
          </span>
        </Link>
        <div className="md:hidden flex items-center">
          <MobNav />
        </div>
        <div className="border rounded-full border-rose-500 hidden md:block hover:border-white">
          {" "}
          {/* Main navigation container */}
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
