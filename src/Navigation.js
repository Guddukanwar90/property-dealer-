import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './assets/images/logo.jpg';

export default function Navigation() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const toggleDropdown = (event) => {
        // Prevent navigation when toggling the dropdown
        event.preventDefault();
        setDropdownVisible(!dropdownVisible);
    };
    const handleParentClick = (e) => {
        // Prevent navigation when clicking on "Available Properties"
        e.preventDefault();
    };

    const linkStyle = {
        textDecoration: "none",
        color: "black",
        padding: "10px 15px",
        fontSize: "15px",
        fontWeight: "600"
    };

    const navbarStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100px",
        backgroundColor: "white",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        padding: "0 20px",
    };

    const logoStyle = {
        fontSize: "20px",
        color: "white",
        fontWeight: "bold",
        textDecoration: "none",
    };

    const dropdownToggleStyle = {
        ...linkStyle,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
    };

    const dropdownMenuStyle = {
        display: dropdownVisible ? "block" : "none",
        position: "absolute",
        top: "100%",
        left: "0",
        width: "250px",
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "10px",
        zIndex: 10,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)",
    };

    return (
        <>
            <div className="navbar" style={navbarStyle}>
                <Link to="/" style={logoStyle}><img
                    src={logo}
                    alt="Team Member 3"
                    style={{ width: '120px', borderRadius: '50%' }}
                /></Link>

                <nav style={{ display: "flex", gap: "20px", position: "relative" }}>
                    <Link to="/" style={linkStyle}>Home</Link>

                    {/* Dropdown with hover and navigation */}
                    <div
                        style={{ position: "relative" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            to="/available-properties"
                            style={{ ...linkStyle, ...dropdownToggleStyle }}
                        >
                            <a href="#" onClick={handleParentClick} style={{ textDecoration: 'none', color: 'black' }}>Available Properties</a>
                            <span style={{ marginLeft: "5px", fontSize: "12px" }}>▼</span>
                        </Link>
                        <div style={dropdownMenuStyle}>
                            <Link
                                to="/available-properties/exclusive-listing"
                                style={{ ...linkStyle, display: "block", color: "black" }}
                                onClick={() => setDropdownVisible(false)}
                            >
                                Exclusive Listing
                            </Link>
                            <Link
                                to="/available-properties/exclusive-rental"
                                style={{ ...linkStyle, display: "block", color: "black" }}
                                onClick={() => setDropdownVisible(false)}
                            >
                                Exclusive Rental
                            </Link>
                            <Link
                                to="/available-properties/luxury-building"
                                style={{ ...linkStyle, display: "block", color: "black" }}
                                onClick={() => setDropdownVisible(false)}
                            >
                                Luxury Building
                            </Link>
                        </div>
                    </div>

                    <Link to="/location" style={linkStyle}>Location</Link>
                    <Link to="/about" style={linkStyle}>About</Link>
                    <Link to="/contact" style={linkStyle}>Contact</Link>
                </nav>
            </div>

            {/* Subpages will render here */}
            <Outlet />
        </>
    );
}
