import { createContext } from "react";

export type languageContextType = {
    language: string, 
    setLanguage: (c:string) => void
}

export type pDropdownContextType = {
    pDropdownToggle: boolean, 
    setDropdownToggle: (c:boolean) => void
}

export const languageContext = createContext<languageContextType>({
    language:'id', 
    setLanguage: () => {}    
}
)

export const pDropdownContext = createContext<pDropdownContextType>({
    pDropdownToggle: false,
    setDropdownToggle: () => {} 
})