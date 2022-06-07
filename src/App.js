
import { Button, Dialog, DialogActions, DialogContent,  DialogTitle, Fab, Grid, TextField } from '@mui/material';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/system';
import { useState } from 'react';

import contactlist from './data/contactlist';

function App() {

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInsert = () => {
    console.log(name + " or " + contact)
  }

  return (
    <>
      <Header />
      <Content contactData={contactlist}/>
      <Container>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Contact Add</DialogTitle>
          <DialogContent>
            <Grid sx={{display:"flex"}} spacing={1}>
              <TextField fullWidth placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>

            <Grid spacing={1} sx={{marginTop:2,display:"flex"}}>
              <TextField fullWidth placeholder='Contact' value={contact}  onChange={(e) => setContact(e.target.value)}/>
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
