// Import react
import React from 'react';

// Import react router dom
import { Routes, Route } from "react-router-dom";

import ServicePage from '../pages/ServicePage.jsx';
import HomePage from '../pages/HomePage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import Login from '../auth/login.jsx';

export default function RoutesIndex() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            {/* route "/" */}
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
}
