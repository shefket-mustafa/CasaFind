import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import FindHome from "./pages/FindHome"
import ScrollOnTop from "./components/ScrollOnTop"
import ItemDetails from "./components/ItemDetails"
import Contacts from "./pages/Contacts"
import PopUp from "./components/PopUpModal"
import About from "./pages/About"
import Sell from "./pages/Sell"
import AdminPanel from "./pages/AdminPanel"
import Edit from "./pages/Edit"
import { usePopUp } from "./context/PopUpContext"

function App() {

  const {popMessage} = usePopUp();

  return (
    <>
    <ScrollOnTop/>
    <Header />
    {popMessage && <PopUp message={popMessage}/>}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/catalog" element={<FindHome />} />
      <Route path="/about" element={<About />} />
      <Route path="/homes/:id/edit" element={<Edit />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/homes/:id/details" element={<ItemDetails />} />

      <Route path="/admin" element={<AdminPanel />} />


    </Routes>
    <Footer />
    </>
  )
}

export default App
