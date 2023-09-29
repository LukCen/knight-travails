'use strict'
import { Knight } from './Knight.js'
class Traversal {
  /**
     * @param {Number} x - x coordinate of the knight
     * @param {Number} y - y coordinate of the knight
     */
  constructor (x, y) {
    this.x = x
    this.y = y
    this.xDir = [-1, 1, -1, 1, -2, -2, 2, 2] // LEFT-RIGHT
    this.yDir = [2, 2, -2, -2, 1, -1, 1, -1] // UP-DOWN
  }

  /**
     *
     * @param {Number} x - coords of the knight
     * @param {Number} y - coords of the knight
      *@returns {Array<Number>}values of all neighbouring cells
     */
  showAllPossible (x, y) { // testing method, for brainstorming
    const queue = []
    while (queue.length === 0) {
      for (let i = 0; i < this.xDir.length && i < this.yDir.length; i++) { // this condition assumes the board is infinite in size, additional checks would be needed if said size was strictly limited
        queue.push([x + this.xDir[i], y + this.yDir[i]])
      }
    }
    return queue
  }

  calculateMoves (targetX = 0, targetY = 0) {
    const viableMoves = []
    const queue = []
    for (let i = 0; i < this.xDir.length && i < this.yDir.length; i++) {
      viableMoves.push([(this.x + this.xDir[i]), (this.y + this.yDir[i])]) // this will correctly calculate viable moves I think? sure seems to work in the console
    }

    const visited = new Set()
    const steps = 0
    queue.push(...viableMoves)
    this.x = queue.shift()[0]
    this.y = queue.shift()[1]
    // while (queue.length === 0) {
    //   if (this.x === targetX && this.y === targetY) { // means knight has reached his destination
    //     return steps
    //   } else {
    //   }
    // }
    // console.log(queue)
    // console.log(viableMoves)
  }
}

/**
 * 1) create an array composed of arrays of valid X and Y coordinates, using xDir and yDir (maybe unnecessary? will poke at different ideas later)
 * 2) create a set that collects already visited coordinates (prevents duplicates)
 * 3) create a variable to count the number of moves made
 * 4) run a loop of some kind to check if knightX is equal to targetX and knightY is equal to targetY
 * 4a) if it is, return the number of moves, as loop has reached its goal
 * 4b) if not, ...?
 */

const test = new Traversal(1, 1)
// console.log(test.xDir[0])
// console.log(test.showAllPossible(4, 4))
console.log(test.calculateMoves())
console.log([test.x, test.y])
