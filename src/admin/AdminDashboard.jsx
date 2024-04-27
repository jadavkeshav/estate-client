import React from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar component
import './Admin.css'; // Import the CSS file for the admin dashboard

const AdminDashboard = ({ dbUser }) => {
  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-dashboard-content">
        {/* Your admin dashboard content goes here */}
        <h1>Welcome to the Admin Dashboard</h1>
        {/* Example analytics widgets */}
        <div className="analytics-widgets">
          {/* Add various analytics widgets here */}
          <div className="widget">Analytics Widget 1</div>
          <div className="widget">Analytics Widget 2</div>
          <div className="widget">Analytics Widget 3</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
