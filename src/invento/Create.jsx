
import { useState, useContext } from "react"
import { ProductsContext } from "../context/ProductsContext";


const Create = () => {
    // all your logic goes here
    // we have to create state for the inputs ( products name and qty). to create a state, you import hook
const {products, setProducts} = useContext(ProductsContext)
    const [data, setData] = useState({

        name: "",
        qty: "",
        id: Date.now()

    })
    // a function that handles the form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        setData({...data, id: Date.now()})
        

    // connect to an API endpoint and send the data to the api, then udate the state
    // since we are not connecting to API , we update our state with what the user typed 
    // and react will rerender the component

    setProducts([data, ... products])

    }


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row text-center formy">
                    <div className="col-md-6 offset-md-3">
                        <h3>Add Product</h3>
                    </div>
                    <div className="col-md-8 offset-md-2">


                        <form className="py-3 px-5 brr" onSubmit={handleFormSubmit}>
                            <div className="row my-4">
                                <div className="col-md-7">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="product name"
                                        onChange={(e) => {
                                            setData({ ...data, name: e.target.value })
                                        }}
                                        value={data.name}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" placeholder=" Qty"
                                        onChange={(e) => {
                                            setData({ ...data, qty: e.target.value })
                                        }}
                                        value={data.qty} />
                                </div>


                                <div className="col-md-2 text-end">
                                    <input
                                        type="submit"
                                        defaultValue="Add Product"
                                        className="btn btn-primary mine"
                                    />
                                </div>
                            </div>
                        </form>



                    </div>
                </div>


            </div>

        </div>

    )

}

export default Create