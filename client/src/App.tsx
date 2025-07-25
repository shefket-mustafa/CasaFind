import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import FindHome from "./pages/FindHome"
import ScrollOnTop from "./components/ScrollOnTop"
import ItemDetails from "./components/ItemDetails"
import Contacts from "./pages/Contacts"
import { useState } from "react"
import PopUp from "./components/PopUpModal"
import About from "./pages/About"
import Sell from "./pages/Sell"
import { ListingsProvider } from "./context/ListingsContext"
import AdminPanel from "./pages/AdminPanel"
import Edit from "./pages/Edit"

function App() {

  const [popMessage, setPopMessage] = useState("");

  const popHandler = (message:string) => {
    setPopMessage(message);

    setTimeout(() => {
      setPopMessage("")
    },2000)
    
  };

  return (
    <>
    <ScrollOnTop/>
    <ListingsProvider>
    <Header />
    {popMessage && <PopUp message={popMessage}/>}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sell" element={<Sell popHandler={popHandler}/>} />
      <Route path="/catalog" element={<FindHome />} />
      <Route path="/about" element={<About />} />
      <Route path="/homes/:id/edit" element={<Edit popHandler={popHandler}/>} />
      <Route path="/contact" element={<Contacts popHandler={popHandler}/>} />
      <Route path="/homes/:id/details" element={<ItemDetails />} />

      <Route path="/admin" element={<AdminPanel popHandler={popHandler}/>} />


    </Routes>
    </ListingsProvider>
    <Footer />
    </>
  )
}

export default App
