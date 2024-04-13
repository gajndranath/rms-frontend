// Import necessary modules and components
// import { useCreateMyUser } from "@/api/MyUserApi";
// import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

// Define type for component props
type Props = {
  children: React.ReactNode; // Children components to be wrapped by the AuthProviderNavigate component
};

// AuthProviderNavigate component handles authentication and user creation
const AuthProviderNavigate = ({ children }: Props) => {
  const navigate = useNavigate();
  // Retrieve Auth0 configuration values from environment variables
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirecturi = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  // Throw error if any configuration value is missing
  if (!domain || !clientId || !redirecturi || !audience) {
    throw new Error("unable to initialise auth");
  }

  // Callback function to handle redirect and create user on successful authentication
  /*  const onRedirectCallback = (appState?: AppState, user?: User) => {
    navigate("/auth-callback");
  }; */

  const onRedirectCallback = () => {
    navigate("/auth-callback");
  };

  // Render Auth0Provider with configured values and callback function
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirecturi,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {/* Render children components */}
      {children}
    </Auth0Provider>
  );
};

export default AuthProviderNavigate;
