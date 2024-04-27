import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Website from "./pages/Website";
import { Suspense, useEffect, useState } from "react";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Property from "./pages/Property/Property";
import SignInComponent from "./components/SignIn/SignInComponent";
import UserDetailContext from "./components/context/UserDetailsContext";
import MainLayout from "./components/Layout/MainLayout";
import Bookings from "./pages/Bookings/Bookings";
import AdminDashboard from "./admin/AdminDashboard";
import AdminPrivateRoute from "./admin/AdminPrivateRoute"
import { SignIn } from "@clerk/clerk-react";
import { useAuth, useUser } from '@clerk/clerk-react'

function App() {
  
  const queryClient = new QueryClient()
  const [userDetails, setUserDetails] = useState({
    // favourites: [],
    bookings: [],
    token: null
  })

  
  console.log("asdasd")

  const [dbUser, setDbUser] = useState();

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading....</div>}>
            <Routes>
              <Route element={<MainLayout dbUser={dbUser} setDbUser={setDbUser} />}>
                <Route path="/sign-in" element={<SignInComponent />} />
                <Route path="/" element={<Website />} />
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
                <Route path="/bookings" element={<Bookings />}></Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer position="top-right" />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
