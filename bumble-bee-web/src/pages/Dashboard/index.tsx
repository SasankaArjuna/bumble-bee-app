import * as React from 'react';
import {AppLayout, CreditLimit, ProductList, CategoryList, BrandList, CreditUsage, UserList} from "../../components";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {Chip, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {SignInResponseDto} from "../../models";
import {USER_ROLE_IDS} from "../../constants";
import {creditInfoActions, userActions} from "../../redux/actions";
import {useState} from "react";
import Avatar from "@mui/material/Avatar";
import {amber} from "@mui/material/colors";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const INITIAL_CHART_DATA = [{
    name: 'Used Credits',
    data: [0]
},
    {
        name: 'Available Credits',
        data: [0]
    }]

const Dashboard = () => {
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);
    const [creditUsageChartData, setCreditUsageChartData] = useState(INITIAL_CHART_DATA)

    const authenticateUser = useSelector((state: any) => state.auth.authenticateUser )
    const userCreditInfo = useSelector((state: any) => state.credits.userCreditInfo )
    const userList = useSelector((state: any) => state.users.userList )

    React.useEffect(() => {
        if(isUser(authenticateUser.data)) {
            // @ts-ignore
            dispatch(creditInfoActions.getUserCreditInfo())
        }

        if(isAdmin(authenticateUser.data)) {
            // @ts-ignore
            dispatch(userActions.getUserList())
        }

    }, [])

    React.useEffect(() => {
        if(userCreditInfo.data?.creditLimit !==null && userCreditInfo.data?.usedCredits !== null) {
            const used = userCreditInfo.data?.usedCredits || 0
            const total = userCreditInfo.data?.creditLimit || 0
            const available = total - used
            const newChartData = [{
                name: 'Used Credits',
                data: [used]
            },
                {
                    name: 'Available Credits',
                    data: [available]
                }]
            setCreditUsageChartData(newChartData)
        }

    }, [userCreditInfo])

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const isAdmin = (data: SignInResponseDto) => {
        return data?.userRole?.userRoleId === USER_ROLE_IDS.ADMIN
    }

    const isUser = (data: SignInResponseDto) => {
        return data?.userRole?.userRoleId === USER_ROLE_IDS.USER
    }

    return(
        <React.Fragment>
            <AppLayout open={open} toggleDrawer={toggleDrawer}>
                <Grid container spacing={3}>
                    <Grid item container xs={12}>
                       <Grid item xs={10}>
                           <Typography variant="h5">Hi {authenticateUser.data.firstName} !</Typography>
                           <Typography variant="subtitle1">Welcome to Bumble Bee, the online loan offering platform</Typography>
                       </Grid>
                        {isAdmin(authenticateUser.data) && (
                            <Grid item xs={2} textAlign="right">
                                <Chip label="Administrator Preview" color="error" avatar={<Avatar sx={{ bgcolor: amber}}><AdminPanelSettingsIcon /> </Avatar>} />
                            </Grid>
                        )}
                    </Grid>

                    {isUser(authenticateUser.data) && (
                        <React.Fragment>
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 220,
                                    }}
                                >
                                    <CreditUsage
                                        chartData={creditUsageChartData}
                                    />
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 220,
                                    }}
                                >
                                    <CreditLimit
                                        userCreditInfo={userCreditInfo.data}
                                    />
                                </Paper>
                            </Grid>
                        </React.Fragment>
                    )}

                    {isUser(authenticateUser.data) && (
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <ProductList />
                            </Paper>
                        </Grid>
                    )}

                    {isAdmin(authenticateUser.data) && (
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                <UserList userList={userList.data} />
                            </Paper>
                        </Grid>
                    )}

                    {isUser(authenticateUser.data) && (
                        <React.Fragment>
                            <Grid item xs={12} md={6} lg={6}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <CategoryList
                                        categoryList={[]}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <BrandList
                                        brandList={[]}
                                    />
                                </Paper>
                            </Grid>
                        </React.Fragment>
                    )}

                </Grid>
            </AppLayout>
        </React.Fragment>
    )
}

export default Dashboard