import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { theme } from './theme'
import Felt from './assets/table/felt2560.png'
import FeltM from './assets/table/felt1280m.png'

import Navbar from './components/Navbar'
import CrapsFlex from './components/CrapsFlex'

function App() {
  const [topfaceb, setTopfaceb] = useState(() => {
    return true
  })
  let rollDice = () => {
    setTopfaceb(!topfaceb)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          '@media (orientation: portrait)': {
            backgroundImage: `url(${FeltM})`,
          },
          '@media (orientation: landscape)': {
            backgroundImage: `url(${Felt})`,
          },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundColor: 'primary.main',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Navbar rollDice={rollDice} />
        <Stack
          sx={{
            display: 'flex',
            '@media (orientation: portrait)': {
              flexDirection: 'column',
            },
            '@media (orientation: landscape)': {
              flexDirection: 'row',
              justifyContent: 'center',
            },
            alignItems: 'center',
            gap: 20,
            mb: 'auto',
          }}
        >
          <CrapsFlex topfaceb={topfaceb} />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App
