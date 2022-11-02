import React from 'react';
import Table from '@mui/material/Table';
import { TableHead, TableCell, TableRow, TableBody, Paper, TableContainer,TablePagination } from '@mui/material';

const TableView = (props) => {
    const [page,setPage]=React.useState(0);
    const [rowsPerPage,setRowsPerPage]=React.useState(5);
    const handleChangePage=(event, newPage)=>{
        console.log("newPagenewPage",event,newPage)
        setPage(newPage)
    }
    const handleChangeRowsPerPage=(event)=>{
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
    return (
        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: 25, marginLeft: 43 }}>
                <TableContainer sx={{ maxHeight: 300 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {props.columns.map((col, ind) => (
                                    <TableCell key={col.id}
                                    align={col.align}
                                    style={{ backgroundColor: '#f0f8ff', fontWeight: 'bold' }}>
                                        {col.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.rows && props.rows.length>0?
                                (rowsPerPage > 0
                                    ? props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : props.rows
                                  ).map((row,ind)=>{
                                return(
                                    <TableRow key={ind}>
                                        <TableCell>{row.productName}</TableCell>
                                        <TableCell>{row.contractSpend}</TableCell>
                                        <TableCell>{row.stakeholder}</TableCell>
                                        <TableCell>{row.productDescription}</TableCell>
                                    </TableRow>
                                )
                            }):null}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
               rowsPerPageOptions={[5,10, 25, 100]}
               component="div"
               count={props.rows.length}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
             />
            </Paper>
        </div>
    );
};

export default TableView;
