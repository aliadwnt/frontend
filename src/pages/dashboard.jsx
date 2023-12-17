import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import DailyPrices from "../components/DailyPrices";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import SignUp from "../components/SignUp";
import Roadmap from "../components/Roadmap";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import SplashScreen from "../SplashScreen";

function Dashboard() {
  return (
    <div>
<ScrollToTop />
<Navbar />
<Home />
<DailyPrices />
<AboutUs />
<Services />
<SignUp />
<Roadmap />
<Newsletter />
<Footer />
</div>



  );
}

export default SplashScreen (Dashboard);