import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/addNote">Tambah Catatan</Link></li>
                <li><Link to="/archieved">Arsip</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;