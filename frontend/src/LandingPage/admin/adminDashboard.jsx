import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"

function AdminDashboard() {
  return (
    <div className="p-10">
        <br></br>
        <br></br>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <br></br>
        <br></br>
        <br></br>
      <div className="admin_grid grid grid-cols-3 gap-6">
        <div className="admin_box">
        <Link to="/admin_product" className="p-6 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
          Manage Products
        </Link>
        </div>
        <div className="admin_box">
        <Link to="/admin_User" className="p-6 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
          Manage Users
        </Link> 
        </div>
        <div className="admin_box">
        <Link to="/admin_category" className="p-6 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
          Manage Categories
        </Link>
        </div>
        <div className="admin_box">
        <Link to="/admin_order" className="p-6 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
          View all Orders
        </Link>
        </div>

        </div>
        <br></br>
        <br></br>
        <br></br>

    </div>
  );
}

export default AdminDashboard;
