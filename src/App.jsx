import React from "react";
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from "./Home";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Insights from "./Insights";
import ContactUs from "./ContactUs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
