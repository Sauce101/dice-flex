// DIE OLD for referance
const SHOW = [
  'translateZ(-100px) rotateY(0deg)',
  'translateZ(-100px) rotateY(-90deg)',
  'translateZ(-100px) rotateY(-180deg)',
  'translateZ(-100px) rotateY(90deg)',
  'translateZ(-100px) rotateX(-90deg)',
  'translateZ(-100px) rotateX(90deg)',
]

const freshDie = SHOW

export default class Deck {
  constructor(sides = freshDie) {
    this.sides = sides
  }

  get numberOfSides() {
    return this.sides.length
  }

  pop() {
    return this.sides.shift()
  }

  shake() {
    for (let i = this.numberOfSides - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.sides[newIndex]
      this.sides[newIndex] = this.sides[i]
      this.sides[i] = oldValue
    }
  }
}
