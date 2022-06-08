import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const TableData = (props) => {
    return (
        <>
            <TableRow>
                <TableCell><Avatar src={props.av} /></TableCell>
                <TableCell> {props.name}</TableCell>
                <TableCell>{props.number}</TableCell>
                <TableCell><Button size='small' color='error' variant='contained'><DeleteOutlineIcon /></Button></TableCell>
            </TableRow>
        </>
    )
}

const Contact = (props) => {
    let [con, setContact] = useState(props.contactData)
    return (
        <TableContainer maxWidth sx={{ maxHeight: 620 }}>


            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Action</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        con.map((value, key) => (
                            <TableData key={key} name={value.name} number={value.number} av={value.av} />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Contact;
