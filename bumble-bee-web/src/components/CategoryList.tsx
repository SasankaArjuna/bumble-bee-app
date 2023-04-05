import React from "react";
import {
    Button,
    Divider,
    Grid,
    Table,
    TableBody,
    TableContainer,
    Typography,
    TableRow,
    TableCell,
    TableHead,
    TablePagination, IconButton, Chip
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const CategoryList: React.FC<{
    categoryList: Array<any>
    onRefresh: () => void
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
                        Category List
                    </Typography>
                </Grid>
                <Grid item textAlign="right" xs={4}>
                    <IconButton
                        color="default"
                        size="small"
                        onClick={props.onRefresh}
                        style={{marginRight: 7}}
                    >
                        <RefreshIcon />
                    </IconButton>
                    <Button
                        size="small"
                    >
                       Create Category
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
                                ? props.categoryList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                :  props.categoryList
                        ).map((row) => (
                            <TableRow key={row.name} hover>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>
                                    {row.note}
                                </TableCell>
                                <TableCell>
                                    {row.status ? <Chip label="Enable" color="success" size="small" /> : <Chip label="Disable" color="error" size="small" />}
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
                count={props.categoryList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </React.Fragment>
    )
}

export default CategoryList