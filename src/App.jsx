import React from "react"; 
import './styles/nulling.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import TopTitle from "./components/TopTitle/TopTitle";
import Support from "./components/Support/Support";
import Category from "./components/Category/Category";
import Plans from "./components/Plans/Plans";
import TrainingSteps from "./components/TrainingSteps/TrainingSteps";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import Gallery from "./pages/GalleryPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                   <>
                    <TopTitle />
                    <Support />
                    <Category />
                    <Plans />
                    <TrainingSteps />
                    <Map />
                    <Footer />
                    
                    </>
                } />
                <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;