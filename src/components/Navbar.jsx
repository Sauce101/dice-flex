import React from 'react'
import { styled } from '@mui/material/styles'
import CasinoIcon from '@mui/icons-material/Casino'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Navbar = ({ rollDice }) => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: 'secondary.main', mb: 'auto' }}
    >
      <StyledToolbar>
        <Typography
          onClick={rollDice}
          variant="h6"
          // sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          DICE FLEX
        </Typography>
        <CasinoIcon
          fontSize="large"
          // sx={{ display: { xs: 'block', sm: 'none' } }}
          onClick={rollDice}
        />
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
