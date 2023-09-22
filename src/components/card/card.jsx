import './card.scss'

const Card = ({ data }) => {
    const styling = {
        lowStock: {
            color: "red"
        }
    }
    return (
        <div className="card-container">
            <div className="list-container">
                {data.data.books.map((book, index) => {
                    return <div key={index} className='list-items'>
                        {/* <img src={product.images[0]}></img> */}
                        <p><b>{book.title}</b></p>
                        <p>Author:  {book.author}</p>
                        <p>Price:  {book.price}</p>
                        {book.stock > 20 ? <p>Stock:  {book.stock}</p> : <p style={styling.lowStock}>Stock:  {book.stock}</p>}
                        {/* <a href={product.thumbnail} target='_blank'>View Image</a> */}
                    </div>
                })}
            </div>
        </div>
    )
}

export default Card