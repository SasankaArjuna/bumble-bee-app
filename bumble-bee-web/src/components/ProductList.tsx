import React from "react";
import {Button, Divider, Grid, Typography} from "@mui/material";

const ProductList = () => {
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={8}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        color="grey"
                    >
                        Product List
                    </Typography>
                </Grid>
                <Grid item textAlign="right" xs={4}>
                    <Button
                        size="small"
                    >
                        Request New Loan
                    </Button>
                </Grid>
            </Grid>

            <Divider />
        </React.Fragment>
    )
}

export default ProductList