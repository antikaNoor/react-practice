import { useEffect, useState, createContext } from 'react'
import Header from './components/header/header'
import Card from './components/card/card'
import './App.scss'
import Footer from './components/footer/footer'
import SearchBar from './components/searchBar/searchBar'
import Pagination from './components/pagination/pagination'
import BookModal from './components/modalComponent/bookModal'
import Text from './components/text/text'
import Form from './components/form/form'
import Dropdown from './components/dropdown/dropdown'

export const MyContextVariables = createContext();

function App() {
  console.log("this is app")

  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  //explore
  const [title, setTitle] = useState('Explore');
  const [title2, setTitle2] = useState('Send a Message');
  const onClick = (text) => {
    console.log("The click event happened");
    setTitle(text);
  };
  //search
  const searchType = 'text';
  const searchPlaceholder = 'Search by title, author, or genre...';
  const [searchQuery, setSearchQuery] = useState('')

  //fetch data from api
  const [fetchedData, setFetchedData] = useState(null)

  //modal
  const [showBookModal, setShowBookModal] = useState(false)
  const [relatedBook, setRelatedBook] = useState([])

  //sorting (select option)
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [selectedOrderOption, setSelectedOrderOption] = useState('');

  const handleSortChange = (e) => {

    setSelectedSortOption(e.target.value);
  };
  const handleOrderChange = (e) => {
    setSelectedOrderOption(e.target.value);
  };

  const sortOptions = [
    { value: '', label: '' },
    { value: 'price', label: 'Price' },
    { value: 'rating', label: 'Rating' },
  ];

  const orderOptions = [
    { value: '', label: '' },
    { value: 'asc', label: 'Ascending' },
    { value: 'desc', label: 'Descending' },
  ];
  const sortOptionLabels = sortOptions.map((option) => option.label);
  const orderOptionLabels = orderOptions.map((option) => option.label);

  const fetchBooks = (page) => {
    // Fetch data from API
    fetch(`http://localhost:8000/book/get-all-books?page=${page}&limit=6&sortParam=${selectedSortOption}&sortOrder=${selectedOrderOption}&search=${searchQuery}`)
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
    console.log("changed")
    fetchBooks(currentPage);
  }, [currentPage, searchQuery, selectedSortOption, selectedOrderOption]);

  return (
    <div className='container'>
      {/* header */}
      <Header />
      {/* modal */}
      {showBookModal && <BookModal updateModal={updateModal} relatedBook={relatedBook} />}
      {/* searching */}
      <div className='search-book'>
        {/* <MyContextVariables.Provider value={{ title, onClick }}>
          <Text />
        </MyContextVariables.Provider> */}
        <SearchBar type={searchType}
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />
        <div className='dropdown'>
          <Dropdown title="Sort by"
            labels={[...sortOptionLabels]}
            options={sortOptions}
            selectedOption={selectedSortOption}
            onChange={handleSortChange} />
          <Dropdown title="Order by"
            labels={[...orderOptionLabels]}
            options={orderOptions}
            selectedOption={selectedOrderOption}
            onChange={handleOrderChange} />
        </div>
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
