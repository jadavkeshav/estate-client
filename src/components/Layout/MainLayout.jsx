import React from 'react'
import Layout from './Layout'
import { useNavigate } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
const MainLayout = ({dbUser, setDbUser}) => {
    const navigate = useNavigate()
    return (
        <div>
            <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
                <Layout dbUser={dbUser} setDbUser={setDbUser} />
            </ClerkProvider>
        </div>
    )
}

export default MainLayout
