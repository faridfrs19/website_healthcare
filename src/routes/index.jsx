// Import react
import React from 'react';

// Import react router dom
import { Routes, Route } from "react-router-dom";

import ServicePage from '../pages/ServicePage.jsx';
import HomePage from '../pages/HomePage.jsx';

export default function RoutesIndex() {
    return (
        <Routes>
            {/* route "/" */}
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
        </Routes>
    );
}
