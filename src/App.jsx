import { useEffect, useState } from 'react'
import Header from './components/header/header'
// import Button from './components/button/button'
import Card from './components/card/card'
import './App.scss'
import Footer from './components/footer/footer'
import MyName from './components/myName'
import SearchBar from './components/searchBar/searchBar'
import Pagination from './components/pagination/pagination'

function App() {
  console.log("this is app")

  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages]  = useState(1)

  //search
  const searchType = 'text';
  const searchPlaceholder = 'Search by title, author, or genre...';
  const [searchQuery, setSearchQuery] = useState('')

  //fetch data from api
  const [fetchedData, setFetchedData] = useState(null)

  const fetchBooks = (page) => {
    // Fetch data from API
    fetch(`http://localhost:8000/book/get-all-books?page=${page}&limit=5&search=${searchQuery}`)
      .then((response) => response.json())
      .then((result) => {
        setTotalPages(Math.ceil(result.data.totalRecords / 5));
        setCurrentPage(page);
        setFetchedData(result)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage, searchQuery]);

  return (
    <div className='container'>
      <Header />
      <div className='search-book'>
        <SearchBar type={searchType}
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      {/* <Button onDataFetched={onDataFetched} /> */}
      {fetchedData && <Card data={fetchedData} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => fetchBooks(page)} // Update currentPage when a page is clicked
      />
      <Footer />
    </div>
  )
}

export default App
