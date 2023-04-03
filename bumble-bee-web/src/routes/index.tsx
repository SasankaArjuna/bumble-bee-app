import React from "react";
import {Route, Routes} from "react-router-dom";
import {SignIn, Dashboard, SignUp} from '../pages'
import {APP_ROUTES} from "../constants";
const AppRoutes = () => {
    return(
        <Routes>
            <Route
                path={APP_ROUTES.ROOT}
                element={<SignIn />}
            />
            <Route
                path={APP_ROUTES.DASHBOARD}
                element={<Dashboard />}
            />
            <Route
                path={APP_ROUTES.SIGN_UP}
                element={<SignUp />}
            />
        </Routes>
    )
}

export default AppRoutes