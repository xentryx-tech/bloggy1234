import { createContext, useState } from "react";


const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {

    // assume we sent a request to an endpoint and it returns data below
    const dummy = [
        {
            id: 1,
            name: "Hp Laptop",
            qty: 5
        },
          {
            id: 2,
            name: "Apple Laptop",
            qty: 5
        },
        {
            id: 3,
            name: "Dell Laptop",
            qty: 3

        }
    ]
    const [products, setProducts] = useState(dummy);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}




export {ProductsContext, ProductsProvider}