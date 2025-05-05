import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

import Contact from "./components/Contact";
import About from "./components/About";
import Cart from './home/Cart';



import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import SearchResults from './pages/SearchResults';


function App() {
  // eslint-disable-next-line no-unused-vars
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={ authUser? <Courses /> : <Navigate to="/signup" />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} /> {/* Add this */}
        <Route path="/about" element={<About />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchResults />} />
        
        
   
 
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;