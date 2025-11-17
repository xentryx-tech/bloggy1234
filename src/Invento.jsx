import Header from "./invento/Header"
import Create from "./invento/Create"
import Products from "./invento/Products"
import Footer from "./invento/Footer"
import { useEffect, useContext } from "react"
import { ProductsContext } from "./context/ProductsContext"





const Invento = () => {
const {products} = useContext(ProductsContext)
    // all your logic goes here
    // keeps a state to manage all the products that has been addeded to inventory

    useEffect(() =>{

        console.log("i ran")
    }, [Products])

    return (
        <div className="container">
            <Header />
            <Create />

            <Products />
            <Footer />
        </div>

    )

}

export default Invento