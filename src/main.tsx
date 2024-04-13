import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AuthProviderNavigate from "./auth/authProviderNavigate";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "./components/ui/sonner";

// Creating  a new instance of QueryClient to manage data fetching and caching
// We disable automatic data refetching when the browser window regains focus
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Render the root component of the application
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Set up the application router */}
    <Router>
      {/* Provide the QueryClient instance to the entire application */}
      <QueryClientProvider client={queryClient}>
        {/* Provide authentication navigation functionality */}
        <AuthProviderNavigate>
          {/* Define the routes of the application */}
          <AppRoutes />
          <Toaster visibleToasts={1} position="bottom-center" richColors />
        </AuthProviderNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
