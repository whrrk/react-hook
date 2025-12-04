import {ReactNode, useCallback, useMemo, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { User } from "../context/AuthContext";

const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user,setUser] = useState<User | null>(null);
    
    const login =  useCallback((userInfo: any) => {
       if(
        userInfo.username === "testUser" && 
        userInfo.email === "test@gmail.com"
        ) {
            setUser(userInfo);
        } else {
            console.log("Invalid credentials");
        }
    },[]);

    const logout =  useCallback(
      () => {
        setUser(null);
      },
      []);

    const contextValue = useMemo(
        () =>({
        user, 
        login, 
        logout
        }),[user, login, logout]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;