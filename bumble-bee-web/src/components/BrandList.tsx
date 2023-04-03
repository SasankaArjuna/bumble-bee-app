import React from "react";
import {
    Button,
    Divider,
    Grid, IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';

const BrandList: React.FC<{
    brandList: Array<any>
}> = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={8}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        color="grey"
                    >
                        Brand List
                    </Typography>
                </Grid>
                <Grid item textAlign="right" xs={4}>
                    <IconButton
                        color="default"
                        size="small"
                        style={{marginRight: 7}}
                    >
                        <RefreshIcon />
                    </IconButton>

                    <Button
                        size="small"
                    >
                       Create Brand
                    </Button>

                </Grid>
            </Grid>

            <Divider />

            <TableContainer>
                <Table size="medium">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Note</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                                ? props.brandList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                :  props.brandList
                        ).map((row) => (
                            <TableRow key={row.name} hover>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.note}
                                </TableCell>
                                <TableCell align="right">
                                    {row.status}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={props.brandList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </React.Fragment>
    )
}

export default BrandList