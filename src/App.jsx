// import EditData from "./components/editData/editData";
import { createContext, useEffect, useState } from "react";
import FetchData from "./components/fetchData/fetchData";
import PostData from "./components/postData/postData";
import Header from './components/header/header'
import Footer from './components/footer/footer'

export const ProductContext = createContext();

function App() {
  const [fetchReload, setFetchReload] = useState(false);

  useEffect(() => {
    console.log("FetchReload: ", fetchReload);
  }, [fetchReload]);

  console.log("this is app")
  return (
    <>
      <Header />
      <ProductContext.Provider value={{ fetchReload, setFetchReload }}>
        <PostData />
        <FetchData />
      </ProductContext.Provider>
      <Footer />
    </>
  )

}

export default App
