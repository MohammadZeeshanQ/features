import React from 'react'
import { Drawer, Toolbar, List, ListItem, Button } from '@mui/material'

export default function SideBar() {
    return (
        <Drawer
            sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                <ListItem>
                    <Button>Home</Button>
                </ListItem>
            </List>
        </Drawer>
    )
}
