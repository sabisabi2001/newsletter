import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Arun pages/Home";
import Transactionemail from "./Pages/Arun pages/Transactionemail";
import Signup from "./Pages/Arun pages/Signup";
import Login from "./Pages/Arun pages/Login";

import Menu from "./Navbar/Gokul/Menu";
import Produts from "./Pages/Gokul pages/Produts";
import Resourse from "./Pages/Gokul pages/Resourse";
import Insprataion from "./Pages/Gokul pages/Insprataion";
import Footer from "./Pages/Gokul pages/Footer";

import Websites from "./Pages/Sabi pages/Websites";
import Markting from "./Pages/Sabi pages/Markting";

function App() {
  return (
    <>
      <Router>
        <Menu />

        <Routes>
          <Route path="/" exact element={<Home />}></Route>

          <Route path="/Produts" element={<Home />} />
          <Route path="/Resourse" element={<Home />} />
          <Route path="/Insprataion" element={<Home />} />

          <Route path="/Websites" element={<Websites />}></Route>
          <Route path="/Markting" element={<Markting />}></Route>
          <Route
            path="/Transactionemail"
            element={<Transactionemail />}
          ></Route>

          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
