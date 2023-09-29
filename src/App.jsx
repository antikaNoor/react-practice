import EditData from "./components/editData/editData";
import FetchData from "./components/fetchData/fetchData";
import PostData from "./components/postData/postData";

function App() {
  console.log("this is app")
  return (
    <>
      <PostData />
      <EditData />
      <FetchData />
    </>
  )

}

export default App
