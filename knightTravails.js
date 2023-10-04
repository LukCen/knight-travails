'use strict'

class Traversal {
  static dir = [[-1, 2], [1, 2], [-1, -2], [1, -2], [-2, 1], [-2, -1], [2, 1], [2, -1]]

  constructor (x, y) {
    this.x = x
    this.y = y
  }

  calculateMoves (targetX, targetY) {
    let steps = 0
    const target = `${targetX},${targetY}`
    let queue = [[this.x, this.y]] // initiate queue with current position
    const visited = new Map().set(`${this.x},${this.y}`, null) // create a map of keys (array of values) and values (current location for each value) - start with values being null
    while (queue.length) { // check if queue is empty
      if (visited.has(target)) { // if this is true, it means we have reached our goal
        // reconstruct the path
        let point = [targetX, targetY]
        const path = []

        while (point) {
          path.push(point)
          point = visited.get(point.join(','))
        }
        const showPath = JSON.stringify(path.reverse())
        return `Your amount of steps: ${steps}, your path: ${JSON.parse(JSON.stringify(showPath))}` // this took way more work than I want to admit
      }
      const next = []
      for (const [currentX, currentY] of queue) { // take each element of the 'queue' array
        const viableMoves = Traversal.dir.map(([dx, dy]) => [currentX + dx, currentY + dy]).filter(([x, y]) => x >= 0 && y >= 0 && !visited.has(`${x},${y}`) && visited.set(`${x},${y}`, [currentX, currentY]))
        next.push(...viableMoves)
      }
      queue = next
      steps++
    }
  }
}

const test = new Traversal(0, 0)
console.log(test.calculateMoves(8, 8))
