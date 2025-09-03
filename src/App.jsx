import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

import HomePage from "./pages/HomePage";
import WatchPage from "./pages/VideoPage";

import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <TopBar toggleSidebar={toggleSidebar} />
        <div className="app-body">
          <SideBar isOpen={sidebarOpen} />

          {/* Overlay (mobile only) */}
          {sidebarOpen && (
            <div className="overlay" onClick={closeSidebar}></div>
          )}

          <div className={`main-content ${sidebarOpen ? "" : "collapsed"}`}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/watch/:id" element={<WatchPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
