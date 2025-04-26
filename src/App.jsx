import React from "react"; 
import './styles/nulling.css';

import Navbar from "./components/Navbar/Navbar";
import TopTitle from "./components/TopTitle/TopTitle";
import Support from "./components/Support/Support";
import Category from "./components/Category/Category";
import Plans from "./components/Plans/Plans";
import Steps from "./components/Steps/Steps";
import Training from "./components/Training/Training";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <TopTitle />
            <Support />
            <Category />
            <Plans />
            <Steps />
            <Training />
            <Footer />
        </div>
    )
}
export default App;