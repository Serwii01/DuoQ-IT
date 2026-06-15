import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { initLenis } from "./lib/smoothScroll";

import CustomCursor from "./components/CustomCursor.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";

export default function App() {
  // Smooth scroll global (una sola vez)
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <>
      <CustomCursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </>
  );
}
