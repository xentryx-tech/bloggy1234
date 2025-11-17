

const Quotes = ({ qs }) => {
    // console.log(qs)

    return (
        <div className="row text-center">
            <div className="col-md-12 text-center">
                <h1>Quotes List</h1>
            </div>
            <div className="col-md-12">
                <div className="row">
                    {qs && qs.map(function (quote) {
                        return(
                            <div className="col-md-6" key={quote.id}>
                                <h3>{quote.title}</h3>
                                <p>{quote.summary}</p>
                                <p className="small">{quote.poster}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )

}


export default Quotes