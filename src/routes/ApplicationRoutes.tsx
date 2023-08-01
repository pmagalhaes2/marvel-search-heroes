import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Character } from "../pages/Character";
import ScrollToTop from "../containers/ScrollToTop";
import { Footer } from "../components/Footer";

export const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:characterId" element={<Character />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
