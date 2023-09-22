import { useEffect, useState } from 'react'
import Header from './components/header/header'
// import Button from './components/button/button'
import Card from './components/card/card'
import './App.scss'
import Footer from './components/footer/footer'
import MyName from './components/myName'
import SearchBar from './components/searchBar/searchBar'

function App() {
  console.log("this is app")

  const [fetchedData, setFetchedData] = useState(null)

  useEffect(() => {
    // Fetch data from API
    fetch('http://localhost:8000/book/get-all-books')
      .then((response) => response.json())
      .then((result) => setFetchedData(result))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className='container'>
      <Header />
      <MyName />
      <SearchBar />
      {/* <Button onDataFetched={onDataFetched} /> */}
      {fetchedData && <Card data={fetchedData} />}
      <Footer />
    </div>
  )
}

export default App
