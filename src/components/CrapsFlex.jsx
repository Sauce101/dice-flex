import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { buildMd, buildSm, rotateMd, rotateSm } from './CrapDice'

let rollTo, diceStart, die1, die2

const medW = window.matchMedia('(min-width: 1000px)')
const medH = window.matchMedia('(min-height: 1000px)')

// Move Dice after roll
if (medW.matches || medH.matches) {
  rollTo = rotateMd
} else {
  rollTo = rotateSm
}

// Dice responsive
const diceResponsive = medW.matches || medH.matches ? '200px' : '100px'

// Shake
const random_shake = () => rollTo[Math.floor(Math.random() * rollTo.length)]

// Build Dice
if (medH.matches || medW.matches) {
  diceStart = buildMd
} else {
  diceStart = buildSm
}

StartGame()
function StartGame() {
  die1 = rollTo[4]
  die2 = rollTo[4]
}

export default function CrapsFlex({ topfaceb }) {
  const [topface, setTopface] = useState(() => {
    return true
  })

  useEffect(() => {
    die1 = random_shake()
    die2 = random_shake()
  }, [topface, topfaceb])

  let rollDice = () => {
    setTopface(!topface)
  }

  const DICE = [die1, die2]

  return (
    <>
      {DICE.map((roll, index) => (
        <Box
          // scene
          onClick={rollDice}
          key={index}
          sx={{
            height: diceResponsive,
            width: diceResponsive,
            perspective: '400px',
          }}
        >
          <Box
            // cube
            sx={{
              transform: `${roll}`,
              width: diceResponsive,
              height: diceResponsive,
              position: 'relative',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
            }}
          >
            {diceStart.map((spot, index) => (
              <Card
                // dieFace
                elevation={0}
                square
                key={index}
                sx={{
                  transform: `${spot.transform}`,
                  background: 'hsla(0, 90%, 50%, 0.7)',
                  position: 'absolute',
                  width: diceResponsive,
                  height: diceResponsive,
                }}
              >
                <CardMedia
                  component="img"
                  src={spot.src}
                  alt={spot.alt}
                  sx={{
                    width: diceResponsive,
                    height: diceResponsive,
                  }}
                />
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </>
  )
}
