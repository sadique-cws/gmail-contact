import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const TableData = (props) => {
    const handleId=()=>{
        props.handleId(props.id)
        console.log("this is table data")
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
                <TableCell><Button size='small' color='error' variant='contained' onClick={handleId}><DeleteOutlineIcon /></Button></TableCell>
            </TableRow>
        </>
    )
}

const Contact = (props) => {
  const handleId=(id)=>{
      props.handleDelete(id);
      console.log("this is Contact"+id);
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
                            <TableData key={key} id={value.id} name={value.name} contact={value.contact} altcontact={value.altcontact} email={value.email} add={value.add} av={value.av} handleId={((id)=>handleId(id))} />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Contact;
