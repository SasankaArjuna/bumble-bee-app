import React from "react";
import {Divider, Skeleton, Typography} from "@mui/material";
import {utils} from "../utils";
import {UserCreditInfoResponseDto} from "../models";

const CreditLimit: React.FC<{
    userCreditInfo: UserCreditInfoResponseDto
}> = ({userCreditInfo}) => {

    const calCreditRemainingPercentage = (total: number, used: number) => {
        const remaining = total - used;
        const remainingPercentage = remaining/total * 100
        return `${remainingPercentage.toFixed(0)}%`
    }

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
                {userCreditInfo?.creditLimit ?
                    (<React.Fragment>{utils.numberToCurrency(userCreditInfo?.creditLimit)} <small>LKR</small></React.Fragment>) :
                    ( <Skeleton variant="rectangular" />)
                }
            </Typography>
            <Typography variant="h6">

                {userCreditInfo?.creditLimit ?
                    (<React.Fragment>
                        {calCreditRemainingPercentage(userCreditInfo?.creditLimit, userCreditInfo?.usedCredits)}
                        <small> Remaining</small>
                    </React.Fragment>) :
                    (<Skeleton variant="text" />)
                }
            </Typography>
        </React.Fragment>
    )
}

export default CreditLimit