import React, { useState } from "react";
import "./Membersearch.css";
import DarkMode from "../DarkMode/DarkMode";

const Membersearch = () => {
  // Dummy data for table
  const data = [
    
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Toggle Sidebar Visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Sidebar Toggle Button */}
      <div className="hamburger-icon">
        <button onClick={toggleSidebar} className="hamburger-toggle">
          <i className={`fa ${isSidebarVisible ? "fa-bars" : "fa-times"}`}></i>
        </button>
      </div>

      {/* Main Container */}
      <div className={`member-container ${isSidebarVisible ? "sidebar-active" : ""}`}>
        {/* Filter Section */}
        <div className="filter-section">
          <div className="filter-input">
            <label>क्षेत्र तथा विभाग</label>
            <select>
              <option value="सबै">सबै</option>
            </select>
          </div>
          <div className="filter-input">
            <label>शाखा</label>
            <select>
              <option value="सबै">सबै</option>
            </select>
          </div>
          <div className="filter-input">
            <label>सदस्य प्रकार</label>
            <select>
              <option value="सबै">सबै</option>
            </select>
          </div>
          <div className="filter-input">
            <label>लिङ्ग</label>
            <select>
              <option value="सबै">सबै</option>
            </select>
          </div>
          <div className="filter-buttons">
            <button className="search-btn">🔍 खोज्नुहोस्</button>
            <button className="reset-btn">रिसेट गर्नुहोस्</button>
          </div>
        </div>

        {/* Table Section */}
        <div className={`tables-section ${isSidebarVisible ? "sidebar-active" : ""}`}>
          <div className="tables-header">
            <div>
              <label>Show</label>
              <select>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            <div className="ser">
              <label>Search:</label>
              <input
                type="text"
                placeholder="नाम खोज्नुहोस्"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <button className="export-btn">Export to Excel</button>
              <button className="print-btn">Print</button>
            </div>
          </div>
          <div className={`tables ${isSidebarVisible ? "sidebar-active" : ""}`}>
          <table>
            <thead>
              <tr>
                <th>क्र. सं.</th>
                <th>पुरा नाम</th>
                <th>ठेगाना</th>
                <th>सम्पर्क</th>
                <th>कार्यलय</th>
                <th>शाखा</th>
                <th>पद</th>
                <th>सदस्य प्रकार</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.contact}</td>
                  <td>{item.office}</td>
                  <td>{item.branch}</td>
                  <td>{item.position}</td>
                  <td>{item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membersearch;
