import { createContext, useState } from "react";

export const productsContext = createContext(null);

export const CardProvider = ({ children }) => {

    const [card, setCard] = useState([]);

    const values = {
        card,
        setCard
    }

    return <productsContext.Provider value={values}>{children}</productsContext.Provider>

}