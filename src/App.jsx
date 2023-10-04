import FetchData from "./pages/fetchData/fetchData";
import PostData from "./pages/postData/postData";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  console.log("this is app")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fetch" element={<FetchData />} />
        <Route path="/add-book" element={<PostData />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
