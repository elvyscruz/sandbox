function* sequence() {
  yield 1
  yield 2
  yield 3
}

let generator = sequence()

for (let value of generator){
  console.log(value)
}

// reuse other generators
function* composeSeq(){
  yield* sequence()
  yield* sequence()
}

console.log(composeSeq().next())

// two way generator

function* sumGame(){
  let q1 = yield '2 + 2 = ?'
  console.log(`your answer was ${q1}`)
  
  let q2 = yield '3 + 3 = ?'
  console.log(`your answer was ${q2}`)
}

let game = sumGame()
game.next().value
game.next(4).value
game.next(6).value


// Return value early
function* sequence2() {
  yield 1
  yield 2
  yield 3
}
let seq2 = sequence2()
console.log(seq2.next().value)
console.log(seq2.return('finished'))