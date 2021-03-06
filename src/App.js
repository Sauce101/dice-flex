import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { theme } from './theme'
import Felt from './assets/table/felt2560.png'
import FeltM from './assets/table/felt1280m.png'

import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Dice from './components/Dice'
// import { Typography } from '@mui/material'

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
          backgroundImage: { xs: `url(${FeltM})`, sm: `url(${Felt})` },
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
        {/* <Stack direction="row" spacing={2} justifyContent="space-evenly"> */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          // justifyContent={{ xs: 'space-around', sm: 'space-evenly' }}
          justifyContent={'space-evenly'}
          alignItems={{ xs: 'center' }}
          gap={{ xs: 8 }}
          mb={{ xs: 'auto' }}
        >
          <Dice topfaceb={topfaceb} />
        </Stack>
        {/* <Typography sx={{ position: 'absolute', bottom: 1, ml: '10px' }}>
          Michael Saucedo © 2022
        </Typography> */}
        {/* <Footer rollDice={rollDice} /> */}
      </Box>
    </ThemeProvider>
  )
}

export default App
