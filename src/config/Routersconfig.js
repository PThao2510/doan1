import React from 'react';
import Home from '../pages/Home'
import AdminHome from '../pages/admin/home'
import PrivacyPolicy from '../pages/policy/PrivacyPolicy'
import ReturnPolicy from '../pages/policy/ReturnPolicy'
import ShippingPolicy from '../pages/policy/ShippingPolicy'
import WarrantyPolicy from '../pages/policy/WarrantyPolicy'
import { Route, Routes } from "react-router-dom";

function Routersconfig() {
    return (
        <Routes>
            <Route
                path="/policy/privacy"
                element={<PrivacyPolicy />}
            />
            <Route
                path="/policy/return"
                element={<ReturnPolicy />}
            />
            <Route
                path="/policy/shipping"
                element={<ShippingPolicy />}
            />
            <Route
                path="/policy/warranty"
                element={<WarrantyPolicy />}
            />

            <Route
                path="/admin"
                element={<AdminHome/>}
            />
            <Route
                exact
                path="/"
                element={<Home />}
            />
        </Routes>
    );
}

export default Routersconfig;