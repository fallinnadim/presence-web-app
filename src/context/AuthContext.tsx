import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    token: string | null;
    setToken: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const getToken = (): string | null => localStorage.getItem('token');

    const [token, setTokenState] = useState<string | null>(getToken());

    const setToken = (token: string) => {
        localStorage.setItem('token', token);
        setTokenState(token);
    };


    const logout = () => {
        localStorage.removeItem('token');
        setTokenState(null);
    };


    return (
        <AuthContext.Provider value={{ token, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};