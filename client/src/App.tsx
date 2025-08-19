import { Route, Routes, useNavigate } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import FindHome from "./pages/FindHome";
import ScrollOnTop from "./components/ScrollOnTop";
import ItemDetails from "./components/ItemDetails";
import Contacts from "./pages/Contacts";
import PopUp from "./components/PopUpModal";
import About from "./pages/About";
import Sell from "./pages/Sell";
import AdminPanel from "./pages/AdminPanel";
import Edit from "./pages/Edit";
import { usePopUp } from "./context/PopUpContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
import { setNavigate } from "./auth-hooks/requester";
import { useAuth } from "./context/AuthContext";
import PageNotFound from "./pages/PageNotFound";
import FindAgent from "./pages/FindAgent";
import AgentDetails from "./pages/AgentDetails";
import TermsOfService from "./components/legal/TermsOfService";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import CCPAPrivacyPolicy from "./components/legal/CCPAPrivacyPolicy";
import LegalDisclaimer from "./components/legal/LegalDisclaimer";

function App() {
  const { popMessage } = usePopUp();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return (
    <>
      <ScrollOnTop />
      <Header />
      {popMessage && <PopUp message={popMessage} />}

      <Routes>
        {/* Genaral */}
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/catalog" element={<FindHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/homes/:id/edit" element={<Edit />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/homes/:id/details" element={<ItemDetails />} />
        <Route path="/findAgent" element={<FindAgent />} />
        <Route path="/agentDetails/:id" element={<AgentDetails />} />

        {/* legal */}
        <Route path="/legal/terms" element={<TermsOfService />} />
        <Route path="/legal/privacy" element={<PrivacyPolicy />} />
        <Route path="/legal/ccpa" element={<CCPAPrivacyPolicy />} />
        <Route path="/legal/disclaimer" element={<LegalDisclaimer />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {user?.email === "admin@abv.bg" && (
          <Route path="/admin" element={<AdminPanel />} />
        )}

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
