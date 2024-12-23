import React, { useState } from 'react';
import './Office.css'; // Import your CSS file
import icondd from '../Asset/icon.png';


const Office = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
    {/* Hamburger Button */}
    <div className="hamburger-icon">
    <button onClick={toggleSidebar} className="hamburger-toggle">
    <i className={`fa ${isSidebarVisible ? 'fa-times' : 'fa-bars'}`}></i>
    </button>
    </div>

    <div className="dashboard-wrapper">
      {/* Main Dashboard Content */}
      <div className={`main-content ${isSidebarVisible ? 'sidebar-active' : ''}`}>
        {/* First Section */}
        <h2 className="section-heading">क्षेत्र र त्यस भित्रका सदस्यहरू</h2>
        <div className="card-row">
          <div className="info-card green-card">
            <img src={icondd} alt="icon" className="icon-image" />
            <h5 className="card-title">डेमो पालिका को कार्यालय</h5>
            <h1 className="card-number">13</h1>
          </div>
          <div className="info-card blue-card">
            <img src={icondd} alt="icon" className="icon-image" />
            <h5 className="card-title">डेमो पालिका बाई १</h5>
            <h1 className="card-number">6</h1>
          </div>
          <div className="info-card purple-card">
            <img src={icondd} alt="icon" className="icon-image" />
            <h5 className="card-title">डेमो पालिका बाई २</h5>
            <h1 className="card-number">1</h1>
          </div>
        </div>

        {/* Second Section */}
        <h2 className="section-heading">विभाग र त्यस भित्रका सदस्यहरू</h2>
        <div className="card-row">
          <div className="info-card red-card">
            <span className="house-icon">🏠</span>
            <h5 className="card-title">स्वास्थ्य शाखा</h5>
            <h1 className="card-number">1</h1>
          </div>
          <div className="info-card green-card">
            <span className="house-icon">🏠</span>
            <h5 className="card-title">harpur swasthya</h5>
            <h1 className="card-number">1</h1>
          </div>
          <div className="info-card purple-card">
            <span className="house-icon">🏠</span>
            <h5 className="card-title">डेमो पालिका बाई ४</h5>
            <h1 className="card-number">1</h1>
          </div>
        </div>

        {/* Third Section */}
        <h2 className="section-heading">शाखा र त्यस भित्रका सदस्यहरू</h2>
        <div className="card-row">
          <div className="info-card blue-card">
            <span className="house-icon">🏠</span>
            <h5 className="card-title">सवारी चालक</h5>
            <h1 className="card-number">3</h1>
          </div>
          <div className="info-card dark-card">
            <span className="house-icon">🏠</span>
            <h5 className="card-title">योजना शाखा</h5>
            <h1 className="card-number">16</h1>
          </div>
          <div className="info-card red-card">
            <span className="house-icon">🏠</span>
            <h5 className="card-title">जि.सी. शाखा</h5>
            <h1 className="card-number">8</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Office;
