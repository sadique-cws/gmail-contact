import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const TableData = (props) => {
    const handleDelete=(id)=>{
       props.handleDelete(id);
        
    }
    return (
        <>
            <TableRow>
                <TableCell><Avatar src={props.av} > {props.name[0]}</Avatar></TableCell>
                <TableCell> {props.name}</TableCell>
                <TableCell>{props.contact}</TableCell>
                <TableCell>{props.altcontact}</TableCell>
                <TableCell>{props.email}</TableCell>
                <TableCell>{props.add}</TableCell>
                <TableCell><Button size='small' color='error' variant='contained' onClick={()=>handleDelete(props.id)}><DeleteOutlineIcon /></Button></TableCell>
            </TableRow>
        </>
    )
}

const Contact = (props) => {
    const handleDelete=(id)=>{
        props.handleDelete(id);
        
     }
    return (
        <TableContainer  sx={{ maxHeight: 620 }}>


            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Action</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>AltContact</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Add</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.contactData.map((value, key) => (
                            <TableData key={key} id={value.id} name={value.name} contact={value.contact} altcontact={value.altcontact} email={value.email} add={value.add} av={value.av} handleDelete={((id)=>handleDelete(id))} />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Contact;
