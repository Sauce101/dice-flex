import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Die from './Die'
import D1 from '../assets/dice/craps/one.svg'
import D2 from '../assets/dice/craps/two.svg'
import D3 from '../assets/dice/craps/three.svg'
import D4 from '../assets/dice/craps/four.svg'
import D5 from '../assets/dice/craps/five.svg'
import D6 from '../assets/dice/craps/six.svg'

let dieOne, rollDieOne, dieTwo, rollDieTwo

RollDieOne()
function RollDieOne() {
  const die = new Die()
  die.shake()
  const allSides = Math.ceil(die.numberOfSides)
  dieOne = new Die(die.sides.slice(0, allSides))
  rollDieOne = dieOne.pop()
}

RollDieTwo()
function RollDieTwo() {
  const die = new Die()
  die.shake()
  const allSides = Math.ceil(die.numberOfSides)
  dieTwo = new Die(die.sides.slice(0, allSides))
  rollDieTwo = dieTwo.pop()
}

export default function Dice({ topfaceb }) {
  const [topface, setTopface] = useState(() => {
    return true
  })
  const [nextdice, setNextdice] = useState(() => {
    return true
  })

  useEffect(() => {
    rollDieOne = dieOne.pop()
    rollDieTwo = dieTwo.pop()
    if (dieOne.numberOfSides === 3) {
      RollDieOne()
      RollDieTwo()
      setNextdice(!nextdice)
    }
  }, [topface, topfaceb, nextdice])

  let rollDice = () => {
    setTopface(!topface)
  }

  const cubeface = {
    background: 'hsla(0, 90%, 50%, 0.7)',
    position: 'absolute',
    width: '200px',
    height: '200px',
  }

  const DICE = [rollDieOne, rollDieTwo]

  const POSITION = [
    {
      transform: 'rotateY(0deg) translateZ(100px)',
      src: D3,
      alt: 'three front',
    },
    {
      transform: 'rotateY(180deg) translateZ(100px)',
      src: D4,
      alt: 'four back',
    },
    {
      transform: 'rotateY(90deg) translateZ(100px)',
      src: D5,
      alt: 'five right',
    },
    {
      transform: 'rotateY(-90deg) translateZ(100px)',
      src: D2,
      alt: 'two left',
    },
    { transform: 'rotateX(90deg) translateZ(100px)', src: D1, alt: 'one top' },
    {
      transform: 'rotateX(-90deg) translateZ(100px)',
      src: D6,
      alt: 'six bottom',
    },
  ]

  return (
    <>
      {DICE.map((die, index) => (
        <Box
          // scene
          onClick={rollDice}
          key={index}
          sx={{
            height: '200px',
            width: '200px',
            perspective: '400px',
          }}
        >
          <Box
            // cube
            sx={{
              transform: `${die}`,
              width: '200px',
              height: '200px',
              position: 'relative',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
            }}
          >
            {POSITION.map((spot, index) => (
              <Card
                key={index}
                sx={{
                  transform: `${spot.transform}`,
                  background: cubeface.background,
                  position: cubeface.position,
                  width: cubeface.width,
                  height: cubeface.height,
                }}
              >
                <CardMedia
                  component="img"
                  src={spot.src}
                  alt={spot.alt}
                  height="200"
                  width="200"
                />
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </>
  )
}
