import { useContext } from "react"
import { AppNameContext } from "../context/AppNameContext"
import { ProductsContext } from "../context/ProductsContext";




const Header = () => {
        const {theme} = useContext(AppNameContext);
        const {products} = useContext(ProductsContext)


    // all your logic goes here

    return (
        <div className="row header" id={theme}>
            <div className="col-md-12">
                <div className="row header">
                    <div className="col text-center">
                        <h3> Current Theme: {theme} </h3>
                        <h1 className="mb-3"> Product Inventory </h1>
                        <button type="button" className="btn btn-primary">
                            Count <span className="badge  mine">{products.length}</span>
                        </button>
                        
                    </div>
                </div>

            </div>

        </div>

    )

}

export default Header