import React, { useState } from 'react';
import "./Membergroup.css";
import DarkMode from "../DarkMode/DarkMode";

// Data Array
const data = [
  { title: "Tol Bikas", count: 8, color: "light-green" },
  { title: "Tol Bikas", count: 8, color: "light-blue" },
  { title: "baniyani tole bikash", count: 6, color: "light-purple" },
  { title: "baniyani tole bikash", count: 6, color: "light-gray" },
  { title: "baniyani tole bikash", count: 6, color: "light-green" },
  { title: "baniyani tole bikash", count: 6, color: "light-blue" },
  { title: "baniyani tole bikash", count: 6, color: "light-purple" },
  { title: "Tol Bikas", count: 8, color: "light-gray" },
  { title: "Tol Bikas", count: 8, color: "light-green" },
  { title: "Tol Bikas", count: 8, color: "light-purple" },
  { title: "Tol Bikas", count: 8, color: "light-gray" },
  { title: "टेस्ट टोल विकास", count: 2, color: "light-green" },
  { title: "hamro tole", count: 1, color: "light-blue" },
  { title: "बेलबारी टोल विकास संस्था", count: 3, color: "light-purple" },
  { title: "Nirc टोल विकास संस्था", count: 2, color: "light-gray" },
];

// Card Component
const Card = ({ title, count, color }) => {
  return (
    <div className={`tol-card tol-card--${color}`}>
      <div className="tol-card__icon">
        <span role="img" aria-label="users">👥</span>
      </div>
      <div className="tol-card__content">
        <h3>{title}</h3>
        <p>{count}</p>
      </div>
    </div>
  );
};

// Membergroup Component
const Membergroup = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); // Initial count of visible cards

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const showMoreCards = () => {
    setVisibleCount(data.length); // Show all cards
  };

  const hideExtraCards = () => {
    setVisibleCount(3); // Reset to show only the initial 3 cards
  };

  return (
    <>
      <div className={`tol-container ${isSidebarVisible ? 'sidebar-active' : ''}`}>
        <h1 className="tol-title">टोल विकास संस्था र त्यस भित्रका सदस्यहरु</h1>
        <div className="tol-grid">
          {data.slice(0, visibleCount).map((item, index) => (
            <Card key={index} title={item.title} count={item.count} color={item.color} />
          ))}
        </div>
        <div className="more-section">
          {visibleCount < data.length ? (
            <button className="more-button" onClick={showMoreCards}>
              अधिकमा हेर्नुहोस्
            </button>
          ) : (
            <button className="more-button" onClick={hideExtraCards}>
              लुकाउनुहोस्
            </button>
          )}
        </div>
        <div className="hamburger-icon">
          <button onClick={toggleSidebar} className="hamburger-toggle">
            <i className={`fa ${isSidebarVisible ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Membergroup;
