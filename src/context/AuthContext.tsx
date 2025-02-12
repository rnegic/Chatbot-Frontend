'use client'

import { useContext, createContext, useEffect, useState, ReactNode } from "react";
import { checkAuthStatus, loginUser } from "@/app/api/api-communicator";

type User = {
    name: string;
    email: string;
}

type UserAuth = {
    isSignedin: boolean;
    user: User | null;
    signin: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    signout: () => Promise<void>;
}

const AuthContext = createContext<UserAuth | null>(null);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isSignedin, setIsSignedin] = useState(false);

    useEffect(() => {
        async function checkStatus() {
            const data = await checkAuthStatus();
            if (data) {
                setUser({ email: data.email, name: data.name });
                setIsSignedin(true);
            }
        }
        checkStatus();
    }, []);
    const signin = async (email: string, password: string) => {
        const data = await loginUser(email, password);
        if (data) {
            setUser({ email: data.email, name: data.name });
            setIsSignedin(true);
        }
    };
    const signup = async (name: string, email: string, password: string) => {
        const data = await signupUser(name, email, password);
        if (data) {
            setUser({ email: data.email, name: data.name });
            setIsSignedin(true);
        }
    };
    const signout = async () => {
        await logoutUser(); 
        setIsSignedin(false);
        setUser(null);
        window.location.reload();
    };

    const value = {
        user,
        isSignedin,
        signin,
        signout,
        signup
    };
    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);