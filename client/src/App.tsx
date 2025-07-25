import { Route, Routes, useNavigate } from "react-router"
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
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useEffect } from "react"
import { setNavigate } from "./auth-hooks/requester"

function App() {

  const {popMessage} = usePopUp();
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

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

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      <Route path="/admin" element={<AdminPanel />} />


    </Routes>
    <Footer />
    </>
  )
}

export default App
