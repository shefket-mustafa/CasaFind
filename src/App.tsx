import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
    


    </Routes>
    <Footer />
    </>
  )
}

export default App
