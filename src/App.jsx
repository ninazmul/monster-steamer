import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footers from "./Components/Footers";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footers />
      </BrowserRouter>
    </div>
  );
}

export default App;
