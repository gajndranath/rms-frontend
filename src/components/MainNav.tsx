// Import necessary modules and components
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

// MainNav component renders the main navigation based on authentication status
const MainNav = () => {
  // Retrieve authentication state and methods from Auth0
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {/* Render UsernameMenu if user is authenticated, otherwise render Log In button */}
      {isAuthenticated ? (
        <UsernameMenu /> // Display UsernameMenu if user is authenticated
      ) : (
        <Button
          variant="ghost"
          className="font-bold rounded-full px-6 transition duration-500 ease-in-out transform hover:scale-110 hover:text-white  hover:bg-rose-500"
          onClick={async () => await loginWithRedirect()} // Redirect to Auth0 login page when Log In button is clicked
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
