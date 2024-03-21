import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react"
import { MantineProvider } from '@mantine/core';
import { ClerkProvider } from '@clerk/clerk-react'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    

      <MantineProvider>
        <App />
      </MantineProvider>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);
