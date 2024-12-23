import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Category.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faSearch, faHandshake, faPaperPlane } from '@fortawesome/free-solid-svg-icons';



const Category = () => {
  
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

 


  return (
    <>
      

      {/* Sidebar Menu */}
      <div className="category-box">
      {/* Fiscal Year Section */}
      <div className="category-header">
        <h4>चालु आर्थिक वर्ष: २०८१/०८२</h4>
        <h4>आर्थिक वर्ष: २०८०/०८२</h4>
        </div>

      {/* Menu Items */}
      <ul className="category-list">
        
      
        {/* Main Page */}
        <NavLink to="/Chart" className="sidebar-option" >
          <span>🏠</span>
          <p>मुख्य पृष्‍ठ</p>
        </NavLink>

        {/* Admin Dropdown */}
        <div
          className={`sidebar-option ${openDropdown === 1 ? "open" : ""}`}
          onClick={() => toggleDropdown(1)}
        >
          <span>💻</span>
          <p>कार्यालय</p>
          <i className={`fa ${openDropdown === 1 ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
        </div>
        {openDropdown === 1 && (
          <div className="dropdown">
            <NavLink to="/Office" className="sidebar-option1" >
            <FontAwesomeIcon icon={faUsers}/>
              <p>कार्यालय संरचना</p>
            </NavLink>
            <NavLink to="/Membersearch" className="sidebar-option1" >
            <FontAwesomeIcon icon={faSearch} color="green" />
              <p>सदस्य खोज्नुहोस्</p>
            </NavLink>
            <NavLink to="/Membergroup" className="sidebar-option1" >
            <FontAwesomeIcon icon={faHandshake} color="orange" />
              <p>टोल बिकास संस्था संरचना</p>
            </NavLink>
            <NavLink to="/MemberGroupAdd" className="sidebar-option1" >
            <FontAwesomeIcon icon={faPaperPlane} color="red" />
              <p>टोल बिकास संस्था थप्नुहोस्</p>
            </NavLink>
          </div>
        )}
        

        {/* Communication */}
        <NavLink to="/communication" className="sidebar-option" >
          <span>📞</span>
          <p>संचार</p>
        </NavLink>
        

        {/* Admin Dropdown */}
        <div
          className={`sidebar-option ${openDropdown === 2 ? "open" : ""}`}
          onClick={() => toggleDropdown(2)}
        >
          <span>💻</span>
          <p>प्रशासन अभिलेख</p>
          <i className={`fa ${openDropdown === 2 ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
        </div>
        {openDropdown === 2 && (
          <div className="dropdown">
            <NavLink to="/admin/registration" className="sidebar-option1" >
              <p>दर्ता / चलानी</p>
            </NavLink>
            <NavLink to="/admin/plans" className="sidebar-option1" >
              <p>योजना</p>
            </NavLink>
            <NavLink to="/admin/goods" className="sidebar-option1" >
              <p>जिन्सी</p>
            </NavLink>
          </div>
        )}
        

        {/* Justice Dropdown */}
        <div
          className={`sidebar-option ${openDropdown === 3 ? "open" : ""}`}
          onClick={() => toggleDropdown(3)}
        >
          <span>⚖️</span>
          <p>न्याय</p>
          <i className={`fa ${openDropdown === 3 ? "fa-chevron-down" : "fa-chevron-right"}`}></i>
        </div>
        {openDropdown === 3 && (
          <div className="dropdown">
            <NavLink to="/justice/court" className="sidebar-option1" >
              <p>अदालत</p>
            </NavLink>
            <NavLink to="/justice/laws" className="sidebar-option1" >
              <p>कानूनी</p>
            </NavLink>
          </div>
        )}
        

        {/* Other Links */}
        <NavLink to="/home-map" className="sidebar-option" >
          <span>🏠</span>
          <p>घर, नक्सा</p>
        </NavLink>
        
        <NavLink to="/employment" className="sidebar-option" >
          <span>🌞</span>
          <p>रोजगार</p>
        </NavLink>
        
        <NavLink to="/library" className="sidebar-option" >
          <span>📚</span>
          <p>पुस्तकालय</p>
        </NavLink>
        
        <NavLink to="/tax" className="sidebar-option" >
          <span>💰</span>
          <p>कर</p>
        </NavLink>
        <NavLink
          to="/hospital-management"
          className="sidebar-option"
          
          
        >
          <span>🏥</span>
          <p>अस्पताल व्यवस्थापन</p>
        </NavLink>
        
        {/* Other Links */}
        <NavLink
          to="/education"
          className="sidebar-option"
          
          
        >
          <span>🎓</span>
          <p>शिक्षा</p>
        </NavLink>
        
        <NavLink
          to="/payroll"
          className="sidebar-option"
          
          
        >
          <span>💵</span>
          <p>पेरोल सेटिंग</p>
        </NavLink>
        
        <NavLink
          to="/meetings"
          className="sidebar-option"
          
          
        >
          <span>🗓️</span>
          <p>बैठक ब्यवस्थापन</p>
        </NavLink>
        
        <NavLink
          to="/municipal-profile"
          className="sidebar-option"
          
          
        >
          <span>🏢</span>s
          <p>नगर प्रोफाइल</p>
        </NavLink>
        
        <NavLink
          to="/schedule"
          className="sidebar-option"
          
          
        >
          <span>📅</span>
          <p>समय तालिका</p>
        </NavLink>
        
        <NavLink
          to="/suggestions"
          className="sidebar-option"
          
          
        >
          <span>💡</span>
          <p>सिफारिस</p>
        </NavLink>
        
        <NavLink
          to="/registration-certificate"
          className="sidebar-option"
          
          
        >
          <span>📜</span>
          <p>दर्ता प्रमाण पत्र</p>
        </NavLink>
        
        <NavLink
          to="/disaster-management"
          className="sidebar-option"
          
          
        >
          <span>🔥</span>
          <p>विपद ब्यवस्थापन</p>
        </NavLink>
        
        <NavLink
          to="/e-riksha"
          className="sidebar-option"
          
          
        >
          <span>🚲</span>
          <p>E-Riksha</p>
        </NavLink>
        
        <NavLink
          to="/management"
          className="sidebar-option"
          
          
        >
          <span>⚙️</span>
          <p>व्यवस्थापन</p>
        </NavLink>
        
        <NavLink
          to="/meeting-management"
          className="sidebar-option"
          
          
        >
          <span>👥</span>
          <p>बैठक ब्यवस्थापन</p>
        </NavLink>
        
        <NavLink
          to="/food-monitoring"
          className="sidebar-option"
          
          
        >
          <span>🍽️</span>
          <p>खाधन्न अनुगमन</p>
        </NavLink>
        
        <NavLink
          to="/grants"
          className="sidebar-option"
          
          
        >
          <span>💸</span>
          <p>अनुदान</p>
          </NavLink>
        
        <NavLink
          to="/relief"
          className="sidebar-option"
          
          
        >
          <span>❤️</span>
          <p>बिपन्न</p>
          </NavLink>
      </ul>
      
    </div>

 
    </>
  );
};

export default Category;
