import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const TableData = (props) => {
    
    const handleDelete=(id)=>{
        props.handleDelete(id);
    }

    return (
        <>
            <TableRow>
                <TableCell><Avatar src={props.value.av} > {props.value.name[0]}</Avatar></TableCell>
                <TableCell> {props.value.name}</TableCell>
                <TableCell>{props.value.contact}</TableCell>
                <TableCell>{props.value.altcontact}</TableCell>
                <TableCell>{props.value.email}</TableCell>
                <TableCell>{props.value.add}</TableCell>
                <TableCell>
                    <Button 
                    size='small' 
                    color='error' 
                    variant='contained' 
                    onClick={() => handleDelete(props.id)}>
                        <DeleteOutlineIcon />
                    </Button>
                </TableCell>
            </TableRow>
        </>
    )
}

const Contact = (props) => {
    const handleDelete=(id)=>{
        props.handleDelete(id);
    }

    const testing = () => {
        console.log(props.searchData)
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
                        
                       
                        (props.searchData.length > 0)?
                        (props.searchData.map((value, key) => (
                            <TableData 
                             key={key} 
                             value={value}
                             handleDelete = {(id) => handleDelete(id)}
                            />
                        ))):
                        props.contactData.map((value, key) => (
                            <TableData 
                             key={key} 
                             value={value}
                            handleDelete = {(id) => handleDelete(id)}
                            />
                        ))
                    } 
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Contact;
