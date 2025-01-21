// src/components/HealthcareAdministrator/HealthcareAdministrator.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HealthcareAdministrator.css';
import { FaUser, FaCog, FaSignOutAlt,FaBuilding,FaUsers,FaClipboardCheck, FaExclamationTriangle , FaBars } from 'react-icons/fa';


function HealthcareAdministrator() {
  return (
    <div className="healthcare-admin-container">
      {/* Top Bar */}
      <div className="top-bar">
        <h1 className="healthcare-admin-heading">Welcome Healthcare Administrator!</h1>
        <div className="top-bar-buttons">
        <Link to="/profile"><FaUser className="icon" /> Profile</Link>
          <Link to="/logout"><FaBars className="icon" /> Menu</Link>
          <Link to="/settings"><FaCog className="icon" /> Settings</Link>
          <Link to="/logout"><FaSignOutAlt className="icon" /> Logout</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="healthcare-admin-content">
        <div className="healthcare-admin-grid">
          <div className="healthcare-admin-section">
            <h2><FaBuilding />Facility Management</h2>
            <p>Oversee the management of healthcare facilities within the SmartHealth Hub platform. Maintain details about each facility, including location, services offered, and operational status.</p>
            <button className="healthcare-admin-button">Manage Facilities</button>
          </div>

          <div className="healthcare-admin-section">
            <h2><FaUsers />Staff Coordination</h2>
            <p>Coordinate and manage healthcare staff accounts within the platform. Ensure that healthcare providers and pharmacists have appropriate access levels and permissions.</p>
            <button className="healthcare-admin-button">Manage Staff</button>
          </div>

          <div className="healthcare-admin-section">
            <h2><FaClipboardCheck/>Compliance Oversight</h2>
            <p>Monitor and ensure that the platform adheres to healthcare regulations, standards, and legal requirements. Collaborate with system administrators and other stakeholders to address compliance-related issues.</p>
            <button className="healthcare-admin-button">Monitor Compliance</button>
          </div>

          <div className="healthcare-admin-section">
            <h2><FaExclamationTriangle />Incident Response</h2>
            <p>Coordinate responses to health-related incidents or emergencies that may occur within the SmartHealth Hub ecosystem. Ensure a timely and effective response to incidents, collaborating with healthcare providers and other roles.</p>
            <button className="healthcare-admin-button">Respond to Incidents</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthcareAdministrator;
