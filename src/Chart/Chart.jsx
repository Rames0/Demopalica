import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Chart.css";
import icondd from '../Asset/icon.png';
import DarkMode from "../DarkMode/DarkMode";

const data = [
  {
    name: "प्रचार प्रसार सम्बन्धी",
    "अहिलेसम्मको गुनासो": 4,
    "आजको गुनासो": 0,
  },
  {
    name: "इन्जिनियरिङ सेवा",
    "अहिलेसम्मको गुनासो": 1,
    "आजको गुनासो": 0,
  },
  {
    name: "उपचार सम्बन्धी",
    "अहिलेसम्मको गुनासो": 0,
    "आजको गुनासो": 0,
  },
  {
    name: "खाध्यान्न सम्बन्धी",
    "अहिलेसम्मको गुनासो": 0,
    "आजको गुनासो": 0,
  },
  {
    name: "अन्य",
    "अहिलेसम्मको गुनासो": 0,
    "आजको गुनासो": 0,
  },
];

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarVisible: false,
    };
  }

    // Function to truncate names based on screen size
    truncateName = (name) => {
      if (window.innerWidth < 768) { // For screens smaller than 768px
        return name.length > 10 ? `${name.slice(0, 10)}...` : name; // Truncate long names
      }
      return name; // Full name for larger screens
    };
  

  // Toggle Sidebar Visibility
  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarVisible: !prevState.isSidebarVisible,
    }));
  };

  render() {
    const { isSidebarVisible } = this.state;

    return (
      <>
        {/* Hamburger Menu */}
        <div className="hamburger-icon">
          <button onClick={this.toggleSidebar} className="hamburger-toggle">
            <i className={`fa ${isSidebarVisible ? "fa-bars" : "fa-times" }`}></i>
          </button>
        </div>

        {/* Main Content */}
        <div className={`chart-container ${isSidebarVisible ? "menu-active" : ""}`}>
        <div className={`chart ${isSidebarVisible ? "menu-active" : ""}`}>
          <h2 className="chart-title">गुनासोहरुको स्थिति</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  tickFormatter={this.truncateName} // Apply truncation for names
                  tick={{ fontSize: 12 }} // Set font size
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ fontSize: '12px' }} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="अहिलेसम्मको गुनासो" fill="#8884d8" />
                <Bar dataKey="आजको गुनासो" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className={`other ${isSidebarVisible ? "menu-active" : ""}`}>
          <div className="info">
            <h1>जनतालाई सम्प्रेषण भएको सुचनाहरु</h1>
            <hr />
            <div className="today-total-wrapper">
              <div className="today">
                <img src={icondd} alt="Today" />
                <h1>आज</h1>
                <h2>3</h2>
              </div>
              <div className="total">
                <img src={icondd} alt="Total" />
                <h1>जम्मा</h1>
                <h2>30</h2>
              </div>
            </div>
          </div>

          <div className="info1">
            <h1>कर्मचारीहरु लाई सम्प्रेषण भएको सुचना तथा निर्देशनहरु</h1> <hr />
            <div className="today-total-wrapper">
              <div className="today1">
                <img src={icondd} alt="Today" />
                <h1>आज</h1>
                <h2>5</h2>
              </div>
              <div className="total1">
                <img src={icondd} alt="Total" />
                <h1>जम्मा</h1>
                <h2>50</h2>
              </div>
            </div>
          </div>

          <div className="info2">
            <h1>राहत लगत</h1> <hr />
            <div className="today-total-wrapper">
              <div className="today">
                <img src={icondd} alt="Today" />
                <h1>आज</h1>
                <h2>3</h2>
              </div>
              <div className="total">
                <img src={icondd} alt="Total Relief" />
                <h1>जम्मा</h1>
                <h2>15</h2>
              </div>
            </div>
          </div>
          <div className="info3">
            <h1>सहभागी जनताहरुको संख्या</h1> <hr />
            <div className="today-total-wrapper">
              <div className="today">
                <img src={icondd} alt="Today" />
                <h1>आज</h1>
                <h2>3</h2>
              </div>
              <div className="total1">
                <img src={icondd} alt="Participants" />
                <h1>जम्मा</h1>
                <h2>120</h2>
              </div>
            </div>
          </div>
        </div>
        </div>
        


      </>
    );
  }
}

export default Chart;
