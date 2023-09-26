import './bookModal.scss'

export default function BookModal({ updateModal, relatedBook }) {
    const genre_ = relatedBook.genre.join(", ")

    const styling = {
        imgStyle: {
            height: "50%",
            marginTop: "140px",
            marginLeft: "200px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px"
        },
        infoStyle: {
            color: "red"
        }
    }
    return (
        <div className='bookModal-container'>
            <div className='bookModal-item'>
                <i className="fa-solid fa-x" onClick={updateModal}></i>
                <div className='modal-overlay'>
                    <div className='img-container'>
                        <img src={relatedBook.image} style={styling.imgStyle}></img>
                    </div>
                </div>
                <div className='info-container'>
                    <p><b>{relatedBook.title}</b></p>
                    <p>Author:  {relatedBook.author}</p>
                    <p>Genre:  {genre_}</p>
                    <p><b>Price:  {relatedBook.price}</b></p>
                    {relatedBook.stock > 20 ? <p>Stock:  {relatedBook.stock}</p> : <p style={styling.infoStyle}>Stock:  {relatedBook.stock}</p>}
                    {relatedBook.rating && <p>Rating: {relatedBook.rating}</p>}
                </div>
            </div>
        </div>
    )
}
