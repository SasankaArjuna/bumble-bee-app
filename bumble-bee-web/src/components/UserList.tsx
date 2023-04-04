import React from "react";
import {
    Divider,
    Grid,
    Table,
    TableBody,
    TableContainer,
    Typography,
    TableRow,
    TableCell,
    TableHead,
    TablePagination, IconButton
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import moment from "moment";

const UserList: React.FC<{
    userList: Array<any>
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
                        User List
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
                </Grid>
            </Grid>
            <Divider />

            <TableContainer>
                <Table size="medium">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>email</TableCell>
                            <TableCell>DOB</TableCell>
                            <TableCell>Credit Limit</TableCell>
                            <TableCell>Used Limit</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                                ? props.userList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                :  props.userList
                        ).map((row) => (
                            <TableRow key={row.userId} hover>
                                <TableCell component="th" scope="row">
                                    {row.firstName}
                                </TableCell>
                                <TableCell>
                                    {row.lastName}
                                </TableCell>
                                <TableCell>
                                    {row.email}
                                </TableCell>
                                <TableCell>
                                    {moment(row.dob).format("DD-MM-yyyy")}
                                </TableCell>
                                <TableCell >
                                    {row.userCreditInfo?.creditLimit}
                                </TableCell>
                                <TableCell >
                                    {row.userCreditInfo?.usedCredits}
                                </TableCell>
                                <TableCell>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={props.userList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </React.Fragment>
    )
}

export default UserList