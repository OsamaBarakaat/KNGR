import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import TermsOfUse from "./pages/TermsOfUse";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="mainApp">
        <Nav />
        <main className="mx-12 max-md:mx-4 mainContent">
          {/* nav bar here */}
          <section className="mx-12 max-md:mx-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/termsconditions" element={<TermsConditions />} />
              <Route path="/termsofuse" element={<TermsOfUse />} />
            </Routes>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
