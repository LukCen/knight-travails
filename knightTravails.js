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
    this.xDir = [-2, -2, -1, -1, 1, 1, 2, 2]
    this.yDir = [-1, 1, -2, 1, -2, 2, -1, 1]
  }

  movement (x, y) {
    const moves = 0
    const queue = []
    queue.push(new Knight(0, 0))
  }

  /**
     *
     * @param {Number} x - coords of the knight
     * @param {Number} y - coords of the knight
      *@returns {Number[]}values of all neighbouring cells
     */
  showAllNeighbouring (x, y) { // testing method, for brainstorming
    const queue = []
    for (let i = 0; i < this.xDir.length && i < this.yDir.length; i++) {
    //   console.log(`dirX: ${this.dirX[i]}, dirY: ${this.dirY[i]}`)
      queue.push([x + this.xDir[i], y + this.yDir[i]])
    }
    return queue
  }
}

/**
 * 1) while Queue isn;'t empty, get size (length) of Queue
 * 2) iterate over all elements in Queue using the size you get
 *  for (i = 0; i < newSize; i++)
 * 3) for each element in the queue, add its' neighbour (any point with its X and Y coordinates in the L shape away from it) to the queue
 *
 * smth like
 * for(let i = 0; i < xDir.length && i < yDir.length; i++) {
 * queue.push([xDir[i], yDir[i]])
 * }
 */

const test = new Traversal(1, 1)
console.log(test.xDir[0])
console.log(test.showAllNeighbouring(4, 4))
