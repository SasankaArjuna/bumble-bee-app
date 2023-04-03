import * as React from 'react';
import {AppLayout, CreditLimit, ProductList, CategoryList, BrandList, CreditUsage } from "../../components";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {Typography} from "@mui/material";

const Dashboard = () => {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return(
        <React.Fragment>
            <AppLayout open={open} toggleDrawer={toggleDrawer}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h5">Hi Sasanka !</Typography>
                        <Typography variant="subtitle1">Welcome to Bumble Bee, the online loan offering platform</Typography>
                    </Grid>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 220,
                            }}
                        >
                            <CreditUsage />
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 220,
                            }}
                        >
                           <CreditLimit />
                        </Paper>
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <ProductList />
                        </Paper>
                    </Grid>
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
                </Grid>
            </AppLayout>
        </React.Fragment>
    )
}

export default Dashboard