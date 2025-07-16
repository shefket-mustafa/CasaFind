import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import FindHome from "./pages/FindHome"
import ScrollOnTop from "./components/ScrollOnTop"
import ItemDetails from "./components/ItemDetails"

function App() {

  return (
    <>
    <ScrollOnTop/>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<FindHome />} />
      <Route path="/homes/:id/details" element={<ItemDetails />} />



    </Routes>
    <Footer />
    </>
  )
}

export default App
