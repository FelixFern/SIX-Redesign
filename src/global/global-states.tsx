import { createContext } from "react";

export type languageContextType = {
    language: string, 
    setLanguage: (c:string) => void
}

export const languageContext = createContext<languageContextType>({
    language: 'id', 
    setLanguage: () => {}    
}
)

export type pDropdownContextType = {
    pDropdownToggle: boolean, 
    setDropdownToggle: (c: boolean) => void
}

export const pDropdownContext = createContext<pDropdownContextType>({
    pDropdownToggle: false,
    setDropdownToggle: () => {} 
})

export type tandaiHadirModalType = {
    isOpen: boolean,
    setModal: (c: boolean) => void
}

export const tandaiHadirModalContext = createContext<tandaiHadirModalType>({
    isOpen: false,
    setModal: () => {}
})

export type tandaiHadirContentType = {
    data: Array<string>,
    setData: (c: Array<string>) => void
}

export const tandarHadirContent = createContext<tandaiHadirContentType>({
    data: [],
    setData: () => {}
})