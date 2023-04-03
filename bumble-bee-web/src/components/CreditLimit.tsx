import React from "react";
import {Divider, Typography} from "@mui/material";

const CreditLimit = () => {
    return(
        <React.Fragment>
            <Typography
                variant="h6"
                gutterBottom
                color="grey"
            >
                Credit Limit
            </Typography>
            <Divider />
            <Typography variant="body1" mt={2} mb={1}>
                Your credit limit :
            </Typography>
            <Typography variant="h4" mb={2}>
                15000 <small>LKR</small>
            </Typography>
            <Typography variant="h6">
                20% <small>Remaining</small>
            </Typography>
        </React.Fragment>
    )
}

export default CreditLimit