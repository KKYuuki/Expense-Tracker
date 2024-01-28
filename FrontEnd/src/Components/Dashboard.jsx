import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import './Compo.css';
import axios from "axios";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

const Dashboard = () => {

  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
      .then(result => {
        if (result.data.Status) {
          localStorage.removeItem("valid")
          navigate('/')
        }
      })
  }


  return (
   
    <div className="d-flex">
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 custom-sidebar">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <div className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
            <img src={logo} className='dashboard-jeepheap' onClick={() => { navigate('/dashboard') }} />
          </div>

          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="w-100">
              <Link
                to="/dashboard"
                className="nav-link text-white px-0 align-middle"
              >
                <i className="fs-4 bi-speedometer2 ms-2"></i>
                <span className="ms-2 ms-2 dashboard-link">Dashboard</span>
              </Link>
            </li>
            <li className="w-100">
              <Link
                to="/dashboard/transactions"
                className="nav-link px-0 align-middle text-white"
              >
                <i className="bi bi-credit-card fs-4 ms-2"></i>
                <span className="ms-2 ms-2 dashboard-link">
                  Transactions
                </span>
              </Link>
            </li>
            <li className="w-100">
              <Link
                to="/dashboard/jeepney_detail"
                className="nav-link px-0 align-middle text-white"
              >
                <i className="bi bi-person fs-4 ms-2"></i>
                <span className="ms-2 ms-2 dashboard-link">Profile</span>
              </Link>
            </li>
            <li className="w-100"></li>
            <li className="w-100">
            </li>
            <li className="w-100" onClick={handleLogout}>
              <Link
                className="nav-link px-0 align-middle text-white"
              >
                <i className="fs-4 bi-power ms-2"></i>
                <span className="ms-2 ms-2 dashboard-link">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="noName">
        <div className="dashbMain">

          <div className='userDetails'>
            <div className='userName'>
              <h5>User: </h5>
            </div>


          </div>
          <div className="userProf">
            <img className="userProf" src={profile} alt="Logo" />
          </div>


        </div>
        <div className="dashbMainBody">
          
          <Outlet />
          </div>
        
        </div>
      </div>
    
  );
};

export default Dashboard;


