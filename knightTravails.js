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

  movement (x, y) {
    const moves = 0
    const queue = []
    queue.push(new Traversal(0, 0))
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
    for (let i = 0; i < this.xDir.length && i < this.yDir.length; i++) {
      viableMoves.push([this.xDir[i], this.yDir[i]])
    }
    const visited = new Set()
    const queue = [[0, 0]]
    const steps = 0
    return viableMoves
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

const test = new Traversal(0, 0)
console.log(test.xDir[0])
console.log(test.showAllPossible(4, 4))
console.log(test.calculateMoves())
