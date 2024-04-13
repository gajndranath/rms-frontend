// Import necessary modules and components
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

// MobNavLink component renders navigation links for authenticated users in the mobile menu
const MobNavLink = () => {
  // Retrieve logout method from Auth0
  const { logout } = useAuth0();

  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-rose-400"
      >
        User Profile
      </Link>

      <Button
        onClick={() => logout()} // Logout user when button is clicked
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobNavLink;
