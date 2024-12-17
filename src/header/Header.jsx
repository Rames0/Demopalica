import React, { useState } from "react";
import "./Header.css";
import DarkMode from "../DarkMode/DarkMode";



const Header = () => {
  // Initial list of items
  const items = []; // Example items

  // State for search query and filtered results
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  // State for dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle input change for search functionality
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the items based on the search query
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  

  return (
    <>


      {/* Dark Mode Button */}
      <div className="headerdark">
        <DarkMode />
      </div>

      <div className="headmain">
        {/* Logo Section */}
        <div className="imageheader">
          <img
            src="https://gwp.nirc.com.np/images/logo.png"
            alt="Nepali Logo"
            className="logo"
          />
        </div>

        {/* Header Title */}
        <div className="header">
          <h2>डेमो पालिका</h2>
        </div>

        {/* Fiscal Year Dropdown */}
        
        <div className="date-year">
          <select id="fiscal-year-select">
            <option value="2076/2077">२०७६/२०७७</option>
            <option value="2077/2078">२०७७/७८</option>
            <option value="2078/2079">२०७८/७९</option>
            <option value="2079/2080">२०७९/०८०</option>
            <option value="2080/2081">२०८०/८१</option>
            <option value="2081/2082">२०८१/०८२</option>
          </select>
        </div>


        {/* Search Section */}
        <div className="search-container">
          {/* Search Input */}
          <input
            type="text"
            placeholder="योजना नम्बर/कोड द्वारा खोज्नुहोस्"
            value={searchQuery}
            onChange={handleInputChange}
            className="search-input"
          />

          {/* Display Filtered Results */}
          <ul className="search-results">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li key={index} className="search-item">
                  {item}
                </li>
              ))
            ) : (
              <li className="search-no-results"></li>
            )}
          </ul>
          
        </div>

        <div className="header">
        <p>Hello User</p>
        </div>
        

        {/* Dropdown Menu */}
      <div className="dropdowns-container">
        {/* Dropdown Trigger */}
        <button className="dropdowns-toggle" onClick={toggleDropdown}>
          ⚙️
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="dropdowns-menu">
            {/* Top-Level Menu */}
            <li className="menu-item">
              <span>⚙️ योजना सेटिङ</span>
            </li>
            <li className="menu-item">
              <span>👤 अनुगमन समिति</span>
            </li>
            <li className="menu-item">
              <span>⚙️ दररेट सेटिङ</span>
            </li>
            <li className="menu-item">
              <span>📂 प्रतिवेदन</span>
            </li>
            <li className="menu-item">
              <span>💳 रसिद सेटिङ</span>
            </li>

            {/* Sub-Menu */}
            <li className="menu-item">🔔 बिदा सेटिङ</li>
            <li className="menu-item">
              <span>📂 नागरिक बढुवा सेटिङ</span>
            </li>
            <li className="menu-item">
              <span>📂 नयाँ सिफारिश</span>
            </li>
            <li className="menu-item">
              <span>📂 नयाँ प्रमाण पत्र दर्ता</span>
            </li>
            <li className="menu-item">
              <span>📂 Lab Form</span>
            </li>

            {/* Additional Sections */}
            <li className="menu-item">🏢 कम्पनी सूची</li>
            <li className="menu-item">
              <span>🏢 अमानत सूची</span>
            </li>
            <li className="menu-item">📄 OCR</li>
            <li className="menu-item">
              <span>📅 Date Converter</span>
            </li>
            <li className="menu-item">
              <span>🔑 पासवर्ड परिवर्तन गर्नुहोस्</span>
            </li>
            <li className="menu-item">
              <span>🚪 बाहिर निस्कनु</span>
            </li>
          </ul>
        )}
      </div>
      </div>

      
    </>
  );
};

export default Header;
