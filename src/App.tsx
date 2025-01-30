import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Mieter from "./pages/Mieter";
import Vermieter from "./pages/Vermieter";
import Hausverwalter from "./pages/Hausverwalter";
import Impressum from "./pages/Impressum";
import { ScrollToTop } from "./components/ScrollToTop";
import { PasswordProtection } from "./components/PasswordProtection";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route 
          path="/mieter" 
          element={
            <PasswordProtection>
              <Mieter />
            </PasswordProtection>
          } 
        />
        <Route 
          path="/vermieter" 
          element={
            <PasswordProtection>
              <Vermieter />
            </PasswordProtection>
          } 
        />
        <Route 
          path="/hausverwalter" 
          element={
            <PasswordProtection>
              <Hausverwalter />
            </PasswordProtection>
          } 
        />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  );
}

export default App;