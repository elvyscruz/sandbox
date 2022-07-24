Promise.all([
  new Promise(resolve => setTimeout(()=> resolve(1), 3000)),
  new Promise(resolve => setTimeout(()=> resolve(2), 3000)),
  new Promise(resolve => setTimeout(()=> resolve(3), 3000))
]).then(console.log)

Promise.race([
  new Promise((resolve,reject) => setTimeout(()=> resolve(1),2000)),
  new Promise((resolve,reject) => setTimeout(()=> resolve(2),3000)),
  new Promise((resolve,reject) => setTimeout(()=> resolve(3)),1000),
]).then(console.log)

Promise.any([
  new Promise((resolve,reject) => setTimeout(()=> reject(new Error('oops')),1000)),
  new Promise((resolve,reject) => setTimeout(()=> resolve(2),3000)),
  new Promise((resolve,reject) => setTimeout(()=> resolve(3)),2000),
]).then(console.log)