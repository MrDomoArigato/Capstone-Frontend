import { Views } from "../enums";

import { useState } from "react";

export function DesktopMenu({ setView, title }) {
    const [activeTab, setActiveTab] = useState(Views.Dashboard);

    // Function to handle tab clicks and set the active tab
    const handleTabClick = (view) => {
        setActiveTab(view);
        setView(view);
    };

     // Close the dropdown menu programmatically
     const dropdownMenu = document.getElementById('dropdownMenu');
     if (dropdownMenu) {
         dropdownMenu.classList.remove('show'); // Remove the 'show' class to close the dropdown
     }
     

    return (
        <>
            <div className="desktop-navbar">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className={`nav-link ${activeTab === Views.Dashboard ? 'active' : ''}`} onClick={() => handleTabClick(Views.Dashboard)} href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={`nav-link dropdown-toggle ${activeTab === Views.Account.Transactions || activeTab === Views.Account.Overview || activeTab === Views.Account.Analytics ? 'active' : ''}`} data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Accounts</a>
                                <ul id="dropdownMenu" className="dropdown-menu">
                                    <li><a className={`dropdown-item ${activeTab === Views.Account.Overview ? 'active' : ''}`} onClick={() => handleTabClick(Views.Account.Overview)} href="#">Overview</a></li>
                                    <li><a className={`dropdown-item ${activeTab === Views.Account.Transactions ? 'active' : ''}`} onClick={() => handleTabClick(Views.Account.Transactions)} href="#">Transactions</a></li>
                                    <li><a className={`dropdown-item ${activeTab === Views.Account.Analytics ? 'active' : ''}`} onClick={() => handleTabClick(Views.Account.Analytics)} href="#">Analytics</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeTab === Views.Budget ? 'active' : ''}`} onClick={() => handleTabClick(Views.Budget)} href="#">Budget</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

