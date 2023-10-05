import AllBooksList from "./pages/AllBooksList/AllBooksList";
import AddBook from "./pages/AddBook/AddBook";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import NotFoundPage from "./pages/NotFoundPage";
import Authenticate from "./pages/Authenticate";
import About from "./pages/About/About";

function App() {
  console.log("this is app")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="view-books" element={<AllBooksList />} />
        <Route path="about" element={<About />} />
        <Route path="/" element={<Authenticate />}>
          <Route path="add-book" element={<AddBook />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
