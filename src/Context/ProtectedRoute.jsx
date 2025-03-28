import React, { Children } from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import Instance from '../AxiosConfig';

const AuthContext = createContext()

function ProtectedRoute() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        checkAuth()
    }, []);
    const checkAuth = async () => {
        try {
            const response = await Instance.get("/auth/checkToken")
            if (response.status === 200) {
                setIsAuthenticated(true)

            }
        } catch (error) {
            console.log("error found");
            setIsAuthenticated(false);
        }
    }

    return (
        isAuthenticated ? Children : <Navigate to="/" />
    )
}

export default ProtectedRoute;