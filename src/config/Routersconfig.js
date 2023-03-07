import React from 'react';
import Home from '../pages/Home'
import {Route, Routes} from "react-router-dom";

function Routersconfig() {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<Home/>}
            />
        </Routes>
    );
}

export default Routersconfig;