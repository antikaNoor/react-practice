// import FetchData from "./components/fetchData/fetchData";
// import PostData from "./components/postData/postData";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import FetchData from "../src/components/fetchData/fetchData"

function App() {
  console.log("this is app")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/fetch" element={<FetchData/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
