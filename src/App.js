
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';
// import Navigation from "./Navigation";
import Navigation  from './Navigation'; 
import Home from "./pages/Home";
// import AvailableProperties from "./pages/AvailableProperties";
import Location from "./pages/Location";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ExclusiveListing from "./pages/ExclusiveListing";
import ExclusiveRental from "./pages/ExclusiveRental";
import LuxuryBuilding from "./pages/LuxuryBuilding";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/* <Route path="available-properties" element={<AvailableProperties />}> */}
          <Route path="available-properties/exclusive-listing" element={<ExclusiveListing />} />
          <Route path="available-properties/exclusive-rental" element={<ExclusiveRental />} />
          <Route path="available-properties/luxury-building" element={<LuxuryBuilding />} />
          {/* </Route> */}
          <Route path="location" element={<Location />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
