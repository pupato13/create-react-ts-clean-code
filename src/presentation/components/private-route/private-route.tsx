import React, { useContext } from "react";
import { RouteProps, Route, Navigate } from "react-router-dom";
import { ApiContext } from "@/presentation/contexts";

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
    const { getCurrentAccount } = useContext(ApiContext);

    return getCurrentAccount()?.accessToken ? (
        <Route {...props} />
    ) : (
        <Route {...props} element={<Navigate to="/login" />} />
        // <Route {...props} element={<Navigate replace to="/login" />} />
    );
};

export default PrivateRoute;
