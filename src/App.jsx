import { useState } from 'react'
import Header from './components/header/header'
import Button from './components/button/button'
import Card from './components/card/card'
import './App.css'
import Footer from './components/footer/footer'

function App() {
  console.log("this is app")

  const [fetchedData, setFetchedData] = useState(null)

  const onDataFetched = (data) => {
    setFetchedData(data)
  }
  return (
    <div className='container'>
      <Header />
      <h1>View all product</h1>
      <p>Click the button to view all data</p>
      <Button onDataFetched={onDataFetched} />
      {fetchedData && <Card data={fetchedData} />}
      <Footer />
    </div>
  )
}

export default App
