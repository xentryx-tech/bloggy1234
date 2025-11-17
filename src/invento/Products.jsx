import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"


const Products = () => {

  const { products, setProducts } = useContext(ProductsContext);

  function deleteProduct(idToDelete) {
    let updatedProducts = products.filter(function (pp) {

      return pp.id != idToDelete
    })

    setProducts(updatedProducts)

  }



  // all your logic goes here

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row products text-center">
          <div className="col-md-6 offset-md-3">
            <h3>Products Inventory </h3>
          </div>
          <div className="col-md-8 offset-md-2">
            <table className="table">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products && products.map(function (pro, index) {
                    return (

                      <tr key={pro.id}>
                        <td>{index + 1}</td>
                        <td>{pro.name}</td>
                        <td>{pro.qty}</td>
                        <td>
                          <button className="btn btn-danger btn-sm" onClick={() => { deleteProduct(pro.id) }}>Delete</button>
                        </td>
                      </tr>
                    )
                  })

                }

              </tbody>
            </table>
          </div>
        </div>


      </div>

    </div>

  )

}

export default Products