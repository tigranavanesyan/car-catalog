import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirmsList from "./pages/FirmsList";
import FirmModels from "./pages/FirmModels";
import CarDetails from "./pages/CarDetails";
import FrameList from "./pages/FrameList";
import Breadcrumbs from "./components/Breadcrumbs";
import Specification from "./pages/Specification";
import Scheme from "./pages/Scheme";

const App = () => {
  const [firms, setFirms] = useState([]);

  useEffect(() => {
    fetch('/cars.json')
        .then(response => response.json())
        .then(data => setFirms(data.firms))
        .catch(error => console.error('Error loading data:', error));
  }, []);

  return (
      <Router>
        <div>
          <h1>Catalog</h1>
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<FirmsList firms={firms} />} />
            <Route path=":firmId" element={<FirmModels firms={firms} />} />
            <Route path=":firmId/:modelId" element={<CarDetails firms={firms} />} />
            <Route path=":firmId/:modelId/:frameId" element={<FrameList firms={firms} />} />
            <Route path=":firmId/:modelId/:frameId/:partId" element={<Specification firms={firms} />} />
            <Route path=":firmId/:modelId/:frameId/:partId/:scheme" element={<Scheme firms={firms} />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
