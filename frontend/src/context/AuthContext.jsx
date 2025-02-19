import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()
export const useAuth =  () =>useContext(AuthContext)

export const AuthProvider=  ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect ( () => {
        const storeAuth = localStorage.getItem("isAuthenticated")
        setIsAuthenticated(storeAuth === "true")
    }, [])// Empty dependency array means it runs only once when the component mounts.


    const login =  () => {
        localStorage.setItem("isAuthenticated","true")
        setIsAuthenticated(true)
        navigate("/dashboard")
    }

    const logout =  () => {
        localStorage.setItem("isAuthenticated", "false")
        setIsAuthenticated(false)
        navigate("/")
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
        </AuthContext.Provider>
    )
}