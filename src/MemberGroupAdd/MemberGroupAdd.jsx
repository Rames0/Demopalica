import React, { useState } from "react";
import "./MemberGroupAdd.css";
import DarkMode from "../DarkMode/DarkMode";

const MemberGroupAdd = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    registrationNumber: "",
    registrationDate: "",
    establishmentDate: "",
  });

  const [entries, setEntries] = useState([
    { id: 1, name: "Tol Bikas", address: "", regNumber: "", regDate: "", estDate: "" },
    { id: 2, name: "baniyani tole bikash", address: "", regNumber: "", regDate: "", estDate: "" },
    { id: 3, name: "टेस्ट टोल विकास", address: "", regNumber: "", regDate: "", estDate: "" },
    { id: 4, name: "hamro tole", address: "", regNumber: "", regDate: "", estDate: "" },
    { id: 5, name: "बेलवारी टोल विकास संस्था", address: "", regNumber: "", regDate: "", estDate: "" },
    { id: 6, name: "Nirc टोल विकास संस्था", address: "", regNumber: "", regDate: "", estDate: "" },
    { id: 7, name: "ramesh", address: "Chapagaun", regNumber: "1002", regDate: "२०८०-०५-१६", estDate: "२०६६-०३-०२" },
  ]);

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEntries([
      ...entries,
      {
        id: entries.length + 1,
        name: formData.name,
        address: formData.address,
        regNumber: formData.registrationNumber,
        regDate: formData.registrationDate,
        estDate: formData.establishmentDate,
      },
    ]);
    setFormData({ name: "", address: "", registrationNumber: "", registrationDate: "", establishmentDate: "" });
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <div className="hamburger-icon">
        <button onClick={toggleSidebar} className="hamburger-toggle">
          <i className={`fa ${isSidebarVisible ? "fa-bars" : "fa-times"}`}></i>
        </button>
      </div>

      <div className={`MemberGroupAdd ${isSidebarVisible ? "sidebar-active" : ""}`}>
        <h2>टोल बिकास संस्था</h2>

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="MemberAddform">
          <div className="form-group">
            <label>टोल बिकास संस्थाको नाम</label>
            <input
              type="text"
              name="name"
              placeholder="टोल बिकास संस्थाको नाम लेख्नुहोस् !"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>ठेगाना</label>
            <input
              type="text"
              name="address"
              placeholder="ठेगाना लेख्नुहोस् !"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>दर्ता नम्बर</label>
            <input
              type="text"
              name="registrationNumber"
              placeholder="दर्ता नम्बर लेख्नुहोस् !"
              value={formData.registrationNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>दर्ता मिति</label>
            <input
              type="date"
              name="registrationDate"
              value={formData.registrationDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>गठन भएको मिति</label>
            <input
              type="date"
              name="establishmentDate"
              value={formData.establishmentDate}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-success">पेश गर्नुहोस्</button>
          <button
            type="reset"
            className="btn btn-danger"
            onClick={() =>
              setFormData({ name: "", address: "", registrationNumber: "", registrationDate: "", establishmentDate: "" })
            }
          >
            रद्द गर्नुहोस्
          </button>
        </form>

        {/* Table */}
        <div className={`Addtable-container ${isSidebarVisible ? "sidebar-active" : ""}`}>
          <h3>टोल बिकास संस्थाहरु</h3>
          <table>
            <thead>
              <tr>
                <th>क्र. स.</th>
                <th>टोल बिकास संस्थाको नाम</th>
                <th>ठेगाना</th>
                <th>दर्ता नम्बर</th>
                <th>दर्ता मिति</th>
                <th>गठन भएको मिति</th>
                <th>कार्य</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={entry.id}>
                  <td>{index + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.address}</td>
                  <td>{entry.regNumber}</td>
                  <td>{entry.regDate}</td>
                  <td>{entry.estDate}</td>
                  <td>
                    <div className="iconbtn">
                    <button className="btn btn-edit">✏️</button>
                    <button className="btn btn-delete" onClick={() => handleDelete(entry.id)}>
                      🗑️
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MemberGroupAdd;
