import './myName.css'

const MyName = () => {
    const detail = {
        text: "View All Books",
        styling: {
            backgroundColor: "grey",
            color: "white"
        }
    }

    const ourClassName = "my-div-text"
    return (
        <div className={`my-div ${ourClassName}`}>
            <h1>{detail.text}</h1>
        </div>
    )
}

export default MyName