'use strict'
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
  * @param {Number} targetX - searched coordinate on the X axis
  * @param {Number} targetY - searched coordinate on the Y axis
  * @returns {Number} number of moves it takes to reach the target
  */

  calculateMoves (targetX = 0, targetY = 0) {
    const viableMoves = []
    let queue = [[0, 0]]
    const visited = new Set()
    let steps = 0
    for (let i = 0; i < this.xDir.length && i < this.yDir.length; i++) {
      viableMoves.push([(this.x + this.xDir[i]), (this.y + this.yDir[i])]) // this will correctly calculate viable moves I think? sure seems to work in the console
    }
    queue = [...viableMoves] // populate the queue with moves the knight can make at this moment
    while (queue.length) {
      const next = []
      while (queue.length) {
        const current = queue.shift()
        const currentX = current[0] // extract current position from the queue
        const currentY = current[1] // extract current position from the queue
        console.log(`X: ${currentX} | Y: ${currentY}`)

        if (currentX === targetX && currentY === targetY) { // we've found our goal if this is truthy
          return steps
        }
        for (const d of viableMoves) { // is this even needed in this loop? will investigate later
          const nextX = currentX + d[0]
          const nextY = currentY + d[0]

          if (!visited.has(`${nextX},${nextY}`)) { // this entire part might have to be rewritten, I barely understand wtf this is
            visited.add(`${nextX},${nextY}`)
            next.push([nextX, nextY])
          }
        }
      }
      steps++
      queue = next
    }
  }
}

const test = new Traversal(0, 0)

console.log(test.calculateMoves(8, 8)) // these values cause an infinite loop. I think I need to visit all the neighbouring nodes to the one I'm currently at?

/**
 * I think I'll experiment with keeping an eye of the current position, and if it's values are higher than the target... end the loop i guess? Re-run it with different parameters?
*/
