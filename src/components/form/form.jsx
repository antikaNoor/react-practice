import './form.scss'
const Form = () => {

    return (
        <div className="form-container">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message submitted!");
                }}
            >
                <input className="input-field" type="text" />
                <button type="submit" className="btn-style">Submit</button>
            </form>
        </div>
    )
}

export default Form