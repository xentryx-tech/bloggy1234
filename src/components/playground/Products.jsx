

const Products = ({ products }) => {

    // console.log(products)
    // you loop through using map

    return (
        <div className="row text-center">
            <div className="col-md-12 text-center">
                <h1>products List</h1>
                <ul className="list-group">
                    {

                        products && products.map(function (product, index) {
                            return (
                                <li className="list-group-item" key={index}>{product}</li>
                            )

                        })
                    }

                </ul>
            </div>
        </div>

    )

}


export default Products