import React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import CasinoIcon from '@mui/icons-material/Casino'

export default function Footer({ rollDice }) {
  return (
    <Box sx={{ mt: 'auto', backgroundColor: 'secondary.main' }}>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ my: '8px', left: 'calc(50% - 25px)' }}
        onClick={rollDice}
      >
        <CasinoIcon sx={{ p: '3' }} />
      </Fab>
    </Box>
  )
}
