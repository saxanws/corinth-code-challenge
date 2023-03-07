import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Search from "../../pages/Search";
import Detail from "../../pages/Detail";

import './routes-handler.scss';

const RoutesHandler = () => {
    return (
        <div className="route-wrapper">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </div>
    );
}

export default RoutesHandler;