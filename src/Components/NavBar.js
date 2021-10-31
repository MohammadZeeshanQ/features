import React from 'react'
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material'

export default function NavBar() {
    return (
        <AppBar color='primary' varian='sticky' >
            <Toolbar
                sx={{ margin: 'auto', width: { xs: '90%', sm: '90%', md: '85%' } }}
            >
                <Box sx={{ flexGrow: '1' }} >
                    <Typography variant='h6'>Universe</Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block ' } }} >
                    <Button variant='contained' sx={{ margin: { xs: '0', sm: '0 ', md: '0 .3rem' } }}>Home</Button>
                    <Button variant='contained' sx={{ margin: { xs: '0', sm: '0 ', md: '0 .3rem' } }}>Home</Button>
                    <Button variant='contained' sx={{ margin: { xs: '0', sm: '0 ', md: '0 .3rem' } }}>Home</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
