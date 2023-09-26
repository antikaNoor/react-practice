import { useEffect, useState } from 'react'
import Header from './components/header/header'
import Card from './components/card/card'
import './App.scss'
import Footer from './components/footer/footer'
import SearchBar from './components/searchBar/searchBar'
import Pagination from './components/pagination/pagination'
import BookModal from './components/modalComponent/bookModal'
import Text from './components/text/text'
import Form from './components/form/form'

function App() {
  console.log("this is app")

  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  //explore
  const [title, setTitle] = useState('Explore');
  const [title2, setTitle2] = useState('Send a Message');
  //search
  const searchType = 'text';
  const searchPlaceholder = 'Search by title, author, or genre...';
  const [searchQuery, setSearchQuery] = useState('')

  //fetch data from api
  const [fetchedData, setFetchedData] = useState(null)

  //modal
  const [showBookModal, setShowBookModal] = useState(false)
  const [relatedBook, setRelatedBook] = useState([])

  const fetchBooks = (page) => {
    // Fetch data from API
    fetch(`http://localhost:8000/book/get-all-books?page=${page}&limit=6&search=${searchQuery}`)
      .then((response) => response.json())
      .then((result) => {
        setTotalPages(Math.ceil(result.data.totalRecords / 6));
        setCurrentPage(page);
        setFetchedData(result)
      })
      .catch((error) => console.error(error))
  }

  //show or hide the modal
  const updateModal = () => {
    setShowBookModal(!showBookModal)
  }

  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage, searchQuery]);

  return (
    <div className='container'>
      {/* header */}
      <Header />
      {/* modal */}
      {showBookModal && <BookModal updateModal={updateModal} relatedBook={relatedBook} />}
      {/* searching */}
      <div className='search-book'>
        <Text title={title} />
        <SearchBar type={searchType}
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      {/* card and modal */}
      {fetchedData && <Card data={fetchedData} updateModal={updateModal} setRelatedBook={setRelatedBook} />}
      {/* pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => fetchBooks(page)} />
      {/* send message */}
      <Text title={title2} />
      <Form />
      <Footer />
    </div>
  )
}

export default App
