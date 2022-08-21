import React, { useState } from "react";
import {hot} from 'react-hot-loader/root'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnlyContext, { initialState } from "./context";
import AuthedPage from "./shared/AuthedPage";
import AuthPage from "./shared/AuthPage";
import './main.global.css'
const AppComponent = () => {
    return (
       <OnlyContext.Provider value={initialState}>
        <AuthPage />
       </OnlyContext.Provider> 
    )
}

export const App = hot(AppComponent)