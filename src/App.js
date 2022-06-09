
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Grid, TextField } from '@mui/material';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import AddIcon from '@mui/icons-material/Add';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import PeopleIcon from '@mui/icons-material/People';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import contactlist from './data/contactlist';

function App() {

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [altcontact, setaltContact] = useState("")
  const [email, setEmail] = useState("")
  const [add, setAdd] = useState("")

  const [data, setData] = useState(contactlist);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInsert = () => {
    let newArray = { id: data.length + 1, name: name, contact: contact, altcontact: altcontact, email: email, add: add };
    setData([...data, newArray]);


    handleClose();

  }

  const handleDelete = (id) => {
    console.log("this is handle delete");
    // setData(data.filter((data) => data.id !== id))


  }


  return (
    <>
      <Header />
      <Content contactData={data} handleDelete={((id) => handleDelete(id))} />
      <Container>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Contact Add</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xl={12} >
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <PeopleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField fullWidth label='Name' variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
                </Box>
              </Grid>

              <Grid item xl={12}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField fullWidth variant="standard" label='Contact' value={contact} onChange={(e) => setContact(e.target.value)} />
                </Box>
              </Grid>

              <Grid item xl={12}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />   
                  <TextField fullWidth variant="standard" label='Alternate Contact' value={altcontact} onChange={(e) => setaltContact(e.target.value)} />
                </Box>
              </Grid>

              <Grid item xl={12}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField fullWidth variant="standard" label='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Box>
              </Grid>

              <Grid item xl={12}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />  
                <TextField fullWidth variant="standard" label='add' value={add} onChange={(e) => setAdd(e.target.value)} />
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleInsert()} variant="contained" color="error">Add Now</Button>
          </DialogActions>
        </Dialog>



        <Fab color='primary' onClick={handleClickOpen} aria-label='add' sx={{ position: "absolute", right: 40, bottom: 30 }}>
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
}

export default App;
