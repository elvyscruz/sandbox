async function* seq(){
  await new Promise(resolve => setTimeout(resolve,1000))
  yield 1

  await new Promise(resolve => setTimeout(resolve,1000))
  yield 2
}

let s = seq()

s.next().then((result)=> console.log(result))
s.next().then((result)=> console.log(result))