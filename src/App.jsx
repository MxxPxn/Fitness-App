import React from "react"; 
import './styles/nulling.css';

import Navbar from "./components/Navbar/Navbar";
import TopTitle from "./components/TopTitle/TopTitle";
import Support from "./components/Support/Support";
import Category from "./components/Category/Category";
import Plans from "./components/Plans/Plans";
import TrainingSteps from "./components/TrainingSteps/TrainingSteps";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <TopTitle />
            <Support />
            <Category />
            <Plans />
            <TrainingSteps />
            <Map />
            <Footer />
        </div>
    )
}
export default App;