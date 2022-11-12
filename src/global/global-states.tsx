import { createContext } from "react";

export type languageContextType = {
    language: string, 
    setLanguage: (c:string) => void
}

export const languageContext = createContext<languageContextType>({
    language:'id', 
    setLanguage: () => {}    
}
)