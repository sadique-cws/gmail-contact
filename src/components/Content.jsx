import { Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'

import React from 'react'
import Contact from './Contact'

import Side from './Side'

const Content = (props) => {
  const handleDelete=(id)=>{
    props.handleDelete(id);
  }
  return (
    <Container maxWidth sx={{mt:10,}}>
        
            <Grid container>
                <Grid item lg={2}>
                  <Paper sx={{position:"fixed"}}><Side/></Paper></Grid>
                <Grid item lg={9} sx={{ml:4}}>
                    <Typography>All Contact</Typography>
                    <Contact contactData={props.contactData} handleDelete={(id)=>handleDelete(id)}/>
                    </Grid>
            </Grid>
       
    </Container>
  )
}

export default Content
