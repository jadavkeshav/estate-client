import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { useNavigate } from "react-router-dom";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

const Layout = () => {
    const navigate = useNavigate();
    return (
        <>

            <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
                <div style={{ background: "var(--black)", overflow: "hidden" }}>
                    <Header />
                    <Outlet />
                </div>
                <Footer />
            </ClerkProvider>
        </>
    )
}

export default Layout
