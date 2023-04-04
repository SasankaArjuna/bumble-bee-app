import React from "react";
import {Divider, Skeleton, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {creditInfoActions} from "../redux/actions";
import {utils} from "../utils";

const CreditLimit = () => {
    const dispatch = useDispatch()

    const userCreditInfo = useSelector((state: any) => state.credits.userCreditInfo )

    React.useEffect(() => {
        // @ts-ignore
        dispatch(creditInfoActions.getUserCreditInfo())
    }, [])

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
                {userCreditInfo.data?.creditLimit ?
                    (<React.Fragment>{utils.numberToCurrency(userCreditInfo.data?.creditLimit)} <small>LKR</small></React.Fragment>) :
                    ( <Skeleton variant="rectangular" />)
                }
            </Typography>
            <Typography variant="h6">

                {userCreditInfo.data?.creditLimit ?
                    (<React.Fragment>
                        {calCreditRemainingPercentage(userCreditInfo.data?.creditLimit, userCreditInfo.data?.usedCredits)}
                        <small> Remaining</small>
                    </React.Fragment>) :
                    (<Skeleton variant="text" />)
                }
            </Typography>
        </React.Fragment>
    )
}

export default CreditLimit