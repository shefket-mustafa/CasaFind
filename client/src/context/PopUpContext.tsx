import { createContext, useContext, useState } from "react"

interface PopUpContextType {
    popMessage: string,
    popHandler : (message: string) => void
    setPopMessage : (message: string) => void
}

const PopUpContext = createContext<PopUpContextType | undefined>(undefined);

export const PopUpProvider = ({children} : {children: React.ReactNode}) => {


    const [popMessage, setPopMessage] = useState("");

  const popHandler = (message:string) => {
    setPopMessage(message);

    setTimeout(() => {
      setPopMessage("")
    },2000)
    
  };

    return( 
        <PopUpContext.Provider value={{popHandler, setPopMessage, popMessage}}>
        {children}
        </PopUpContext.Provider>
    )

}

export const usePopUp = () => {
    const context = useContext(PopUpContext);
    if (!context) {
        throw new Error("usePopUp must be used within a PopUpProvider");
      }
    return context
};