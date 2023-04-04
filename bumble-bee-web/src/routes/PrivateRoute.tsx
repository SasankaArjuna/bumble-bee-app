import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {APP_ROUTES} from "../constants";

const PrivateRoute:React.FC<{
    children: any
}> = (props) => {
    const navigate = useNavigate()
    const authenticateUser = useSelector((state: any) => state.auth.authenticateUser )

    React.useEffect(() => {
        if(!authenticateUser.isAuthenticated) {
            navigate(APP_ROUTES.ROOT)
        }
    }, [authenticateUser])

    return(
        <React.Fragment>
            {authenticateUser.isAuthenticated && (props.children)}
        </React.Fragment>
    )
}

export default PrivateRoute