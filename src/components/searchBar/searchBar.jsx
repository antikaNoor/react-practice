import './searchBar.scss'

const searchBar = () => {

    return (
        <div >
            <input className='searchbar-container' type='text' placeholder='Search by title, author or genre...' />
        </div>
    )
}

export default searchBar