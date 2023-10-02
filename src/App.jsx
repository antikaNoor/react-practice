// import EditData from "./components/editData/editData";
import FetchData from "./components/fetchData/fetchData";
import PostData from "./components/postData/postData";
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  console.log("this is app")
  return (
    <>
      <Header />
      <PostData />
      <FetchData />
      {/* <EditData /> */}
      <Footer />
    </>
  )

}

export default App
