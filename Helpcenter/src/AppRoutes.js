import React from "react";
import { Route, Routes } from "react-router-dom";
import BankDetails from "./components/BankDetails";
import EditableInput from "./components/EditableInput";

const AppRoutes = () => {

    return (
        <Routes>
            <Route exact path="/" element={<BankDetails />} />
            <Route exact path="/edit" element={<EditableInput />} />
        </Routes>
    )

}

export default AppRoutes;