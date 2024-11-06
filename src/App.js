import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import Home from "./pages/Home";
import Footer from "./common/Footer";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignuP from "./pages/Signup"
import Signup from "./pages/Signup";
  import Login from "./pages/Login";
import Nopage from "./pages/Nopage"; 
 import Loginadmin from "./admin/Dashboard/Login";
import Dash from "./admin/Dashboard/pages/Dash";
import AddDoc from "./admin/Dashboard/pages/AddDoc";
import DocList from "./admin/Dashboard/pages/DocList";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/admin" element={<Loginadmin />} />
          <Route path="/admin-dashboard" element={<Dash />} />
          <Route path="/add-doctor" element={<AddDoc />} />
          <Route path="/doctor-list "element={<DocList />} />
        </Routes>
      </div>
    
      <Footer />
    

    </div>
  );
}

export default App;
