// Import necessary modules and components
import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import MobNavLink from "./MobNavLink";

// MobNav component renders the mobile navigation menu
const MobNav = () => {
  // Retrieve authentication state and methods from Auth0
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-rose-500" />
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-center items-stretch p-6 gap-2">
        <SheetTitle>
          {/* Display user name if authenticated, otherwise display welcome message */}
          {isAuthenticated ? (
            <span className="flex justify-center items-center font-bold gap-2">
              <CircleUserRound className="text:rose-600" />
              {user?.name}
            </span>
          ) : (
            <h2 className="text-2xl font-bold  text-center text-rose-500">
              Welcome Back!
            </h2>
          )}
        </SheetTitle>
        {/* Informational message for unauthenticated users */}
        {!isAuthenticated && (
          <p className="text-base font-normal text-center">
            Log in to reserve tables, order food, and explore our menu.
          </p>
        )}

        <Separator />

        <SheetDescription className="flex flex-col gap-4 justify-center ">
          {/* Render navigation links if authenticated, otherwise render Log In button */}
          {isAuthenticated ? (
            <MobNavLink />
          ) : (
            <Button
              className="w-full max-w-xs font-bold text-white bg-rose-500 hover:bg-rose-600"
              onClick={async () => await loginWithRedirect()}
            >
              Log In
            </Button>
          )}
        </SheetDescription>
        {/* Sign Up prompt for unauthenticated users */}
        {!isAuthenticated && (
          <p className="text-sm text-center">
            Don't have an account? {/* Link to sign up page */}
            <Link
              to="/"
              className="text-rose-500"
              onClick={async () => await loginWithRedirect()}
            >
              Sign Up
            </Link>
          </p>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobNav;
