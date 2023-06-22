import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
// import Photography from '../pages/Photography';
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Render a page based on the state value of `currentPage`
  const renderPage = () => {
    if (currentPage === "Contact") {
      return (
        <AnimatePresence>
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Contact />;
          </motion.div>
        </AnimatePresence>
      );
    }
    if (currentPage === "Projects") {
      return (
        <AnimatePresence>
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Projects />
          </motion.div>
        </AnimatePresence>
      );
    }
    if (currentPage === "Photography") {
      return (
        <AnimatePresence>
          <motion.div
            key="photography"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Photography />
          </motion.div>
        </AnimatePresence>
      );
    }
    if (currentPage === "Resume") {
      return (
        <AnimatePresence>
          <motion.div
            key="resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Resume />
          </motion.div>
        </AnimatePresence>
      );
    }
    return (
      <AnimatePresence>
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.6 } }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <Home />
        </motion.div>
      </AnimatePresence>
    );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
