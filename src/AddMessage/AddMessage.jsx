import React, { useState } from "react";
import './AddMessage.css'
import DarkMode from "../DarkMode/DarkMode";

const AddMessage = () => {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    mediaType: "मिडियो/लिङ्क",
    mediaInput: "",
    categoryPurpose: "",
    categoryType: "",
    organizationScope: "सबै संस्था",
    organizationPlace: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isSpecialMessage, setIsSpecialMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleRadioChange = (e) => {
    setIsSpecialMessage(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Special Message:", isSpecialMessage);
    console.log("File:", file);
    console.log(formData);
    // Handle form submission logic
  };

  const handleReset = () => {
    setIsSpecialMessage("");
    setFile(null);
  };


  const [isSidebarVisible, setSidebarVisible] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
<>
    {/* Sidebar Toggle Button */}
    <div className="hamburger-icon">
    <button onClick={toggleSidebar} className="hamburger-toggle">
      <i className={`fa ${isSidebarVisible ? "fa-times" : "fa-bars"}`}></i>
    </button>
    </div>

    <div className={`admes ${isSidebarVisible ? "sidebar-active" : ""}`}>
    
      <h2>निर्देशन दिनुहोस्</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="form-gro">
          <label>शिर्षक:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            style={{width:"100%"}}
          />
        </div>

        {/* Message */}
        <div className="form-gro">
          <label>सन्देश:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        {/* Media Type */}
        <div className="form-gro">
            <label>
            भिडियो/लिन्क
              <input
                type="radio"
                name="mediaType"
                value="मिडियो/लिङ्क"
                checked={formData.mediaType === "मिडियो/लिङ्क"}
                onChange={handleInputChange}
              />
              {formData.mediaType === "मिडियो/लिङ्क" && (
              <textarea
                name="mediaInput"
                placeholder="मिडियो/लिङ्क वा हाल्नुहोस्"
                value={formData.mediaInput}
                onChange={handleInputChange}
              />
                )}
                  </label>
                <label>
                अन्य 
                  <input
                    type="radio"
                    name="mediaType"
                    value="अर्को"
                    checked={formData.mediaType === "अर्को"}
                    onChange={handleInputChange}
                  />
                  
                </label>
                <label>
                जनमत
                  <input
                    type="radio"
                    name="mediaType"
                    value="जनमत"
                    checked={formData.mediaType === "जनमत"}
                    onChange={handleInputChange}
                  />
                  {formData.mediaType === "जनमत" && (
              <textarea
                
                name="mediaInput"
                placeholder="मिडियो/लिङ्क वा हाल्नुहोस्"
                value={formData.mediaInput}
                onChange={handleInputChange}
              />
                )}
                  
                </label>
        </div>
          
        

        {/* Category Purpose */}
        <div className="form-gro">
          <label>सन्देशको प्रकार छान्नुहोस्:</label>
          <select
            name="categoryPurpose"
            value={formData.categoryPurpose}
            onChange={handleInputChange}
          >
            <option value="">कामको लागि</option>
            <option value="सूचना">सूचना</option>
          </select>
        </div>

        {/* Category Type */}
        <div className="form-gro">
          <label>सन्देशको प्रकार छान्नुहोस्:</label>
          <select
            name="categoryType"
            value={formData.categoryType}
            onChange={handleInputChange}
          >
            <option value="">सूचना</option>
            <option value="सुझाव">सुझाव</option>
          </select>
        </div>

        {/* Organization Scope */}
        <div className="form-gro1">
          <label>संस्थाको दायरा:</label>
          <div>
            <label style={{marginRight:"15px"}}>
              <input
                type="checkbox"
                name="organizationScope"
                value="सबै संस्था"
                checked={formData.organizationScope === "सबै संस्था"}
                onChange={handleInputChange}
              />
              सबै संस्था
            </label>
            <label >
              <input
                type="checkbox"
                name="organizationScope"
                value="टोल विकास संस्थाको लागि"
                checked={
                  formData.organizationScope === "टोल विकास संस्थाको लागि"
                  
                }
                onChange={handleInputChange}
                
              />
              टोल विकास संस्थाको लागि
            </label>
          </div>
        </div>

        {/* Organization Place */}
        <div className="form-gro">
          <label>स्थान संस्था:</label>
          <select
            name="organizationPlace"
            value={formData.organizationPlace}
            onChange={handleInputChange}
          >
            <option value="">--- स्थान छान्नुहोस् ---</option>
            <option value="स्थानीय">स्थानीय</option>
            <option value="केन्द्रीय">केन्द्रीय</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary" style={{marginBottom:"10px"}}>
          पेश गर्नुहोस्
        </button>

        
      <form onSubmit={handleSubmit}>
        {/* Special Message */}
        <div className="form-gro1">
          <label>विशेष सन्देश हो वा होइन?:</label>
          <div>
            <label>
              <input
                type="radio"
                name="specialMessage"
                value="हो"
                checked={isSpecialMessage === "हो"}
                onChange={handleRadioChange}
              />
              हो
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                name="specialMessage"
                value="होइन"
                checked={isSpecialMessage === "होइन"}
                onChange={handleRadioChange}
              />
              होइन
            </label>
          </div>
        </div>

        {/* File Upload */}
        <div className="form-gro1">
          <label>फाइल अपलोड</label>
          <input type="file" onChange={handleFileChange} />
          {file && <p>{file.name}</p>}
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            + सूचना पठाउनुहोस्
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleReset} style={{ marginLeft: "10px" }}>
            ↺ रिसेट गर्नुहोस्
          </button>
        </div>
      </form>
    
      </form>
    </div>
    </>
  );
};

export default AddMessage;
