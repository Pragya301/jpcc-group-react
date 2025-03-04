import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className='container-fluid nav_bg'>
            <div className='row'>
            <div className='col-10 mx-auto'>

            
        <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src='https://www.jpccgroup.com/wp-content/uploads/2023/09/90.jpg'/></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            
            <li className="nav-item dropdown">
            <NavLink activeClassName="menu_active" className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Project Details
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>

                <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
            </ul>
            </li>
            <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/service">Plot Available</NavLink>
            </li>
            <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact Us</NavLink>
            </li>
        </ul>
        
        </div>
    </div>
    </nav>
    </div>
            </div>
        </div>
        </>
    )
    }

export default Navbar
