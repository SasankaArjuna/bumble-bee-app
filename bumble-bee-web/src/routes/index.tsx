import React from "react";
import {Route, Routes} from "react-router-dom";
import {SignIn, UserDashboard, AdminDashboard, SignUp} from '../pages'
import {APP_ROUTES} from "../constants";
const AppRoutes = () => {
    return(
        <Routes>
            <Route
                path={APP_ROUTES.ROOT}
                element={<SignIn />}
            />
            <Route
                path={APP_ROUTES.ADMIN_DASHBOARD}
                element={<AdminDashboard />}
            />
            <Route
                path={APP_ROUTES.USER_DASHBOARD}
                element={<UserDashboard />}
            />
            <Route
                path={APP_ROUTES.SIGN_UP}
                element={<SignUp />}
            />
        </Routes>
    )
}

export default AppRoutes