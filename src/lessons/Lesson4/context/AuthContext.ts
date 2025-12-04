import { createContext, useContext } from "react";

//ドメインのスキーマ定義
export type User   = {
    id: string;
    username: string;
    email: string;
}

//コンテキストの型定義
interface AuthContextType {
    user: User | null;
    login: (userInfo: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};