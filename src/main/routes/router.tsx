import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "@/presentation/components/private-route/private-route";

import { makeRemoteAuthentication } from "@/main/factories/usecases/authentication/remote-authentication-factory";
import { makeLoginValidation } from "@/main/factories/pages/login/login-validation-factory";
import { Login } from "@/presentation/pages";
import { MakeLogin } from "../factories/pages";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MakeLogin />} />
                <PrivateRoute path="/dashboard" element={<MakeLogin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
