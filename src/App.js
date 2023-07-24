import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./uiComponents/Header";

//* Routes
import LandingPageGlobal from "./uiComponents/LandingPage/LandingPage_global";
import LandingPageDex from "./uiComponents/LandingPage/LandingPage_dex";
import CorporateLogin from "./CorporateLogin";
import Layout from "./uiComponents/Layout";
import BankLayout from "./uiComponents/AppPage/Bank/BankLayout";
import NotFound from "./uiComponents/AppPage/404";

function App() {
    return (
        <Router>
             <Header />
            <Routes>
                <Route exact path="/" element={<LandingPageDex />} />
                {/* <Route exact path="/dex" element={<LandingPageDex />} /> */}
                <Route exact path="/app" element={<Layout />} />
                <Route path="corporate" element={<CorporateLogin />} />

                {/* After the bank has successfully logged in */}
                <Route path="bank/:bankId" element={<BankLayout />} />

                {/* Matching all 404 pages */}
                <Route exact path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
