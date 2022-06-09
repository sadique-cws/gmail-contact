import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import ConstructionIcon from '@mui/icons-material/Construction';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PrintIcon from '@mui/icons-material/Print';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Side() {
    return (
        <List sx={{p:0}}>
            <ListItem>
                <ListItemButton sx={{ borderRadius: 20, backgroundColor: "lightgray" }} color='secondry' ><AddIcon color='primary' />Create Contact</ListItemButton>
            </ListItem>
            <ListItem  sx={{p:0}}>
                <ListItemButton>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItemButton>
            </ListItem>
            <ListItem  sx={{p:0}}>
                <ListItemButton>
                    <ListItemIcon>
                        <HistoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Frequntely Con" />
                </ListItemButton>
            </ListItem>
            <ListItem  sx={{p:0}}>
            <ListItemButton>
                    <ListItemIcon>
                        <ConstructionIcon />
                    </ListItemIcon>
                    <ListItemText primary="Merge & Fix" />
                </ListItemButton>
            </ListItem>
            <hr/>
            <ListItem  sx={{p:0}}>
            <ListItemButton>
                    <ListItemIcon>
                        <KeyboardArrowDownIcon />
                    </ListItemIcon>
                    <ListItemText primary="Labels" />
                </ListItemButton>
            </ListItem>
            <ListItem  sx={{p:0}}>
            <ListItemButton>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Create label" />
                </ListItemButton>
            </ListItem>
            <hr/>
            <ListItem  sx={{p:0}}>
            <ListItemButton>
                    <ListItemIcon>
                        <FileUploadIcon />
                    </ListItemIcon>
                    <ListItemText primary="Import" />
                </ListItemButton>
            </ListItem>
            <ListItem  sx={{p:0}}>
            <ListItemButton>
                    <ListItemIcon>
                        <CloudDownloadIcon />
                    </ListItemIcon>
                    <ListItemText primary="Export" />
                </ListItemButton>
            </ListItem>
            <ListItem  sx={{p:0}}>
            <ListItemButton>
                    <ListItemIcon>
                        <PrintIcon />
                    </ListItemIcon>
                    <ListItemText primary="Print" />
                </ListItemButton>
            </ListItem>
            <hr/>
            <ListItem  sx={{p:0}}>
            <ListItemButton>
                    <ListItemIcon>
                        <SimCardDownloadIcon />
                    </ListItemIcon>
                    <ListItemText primary="Other Contact" />
                </ListItemButton>
            </ListItem>
            <ListItem  sx={{p:0}}>
            <ListItemButton>
                    <ListItemIcon>
                        <DeleteOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trash" />
                </ListItemButton>
            </ListItem>
        </List>
    )
}





