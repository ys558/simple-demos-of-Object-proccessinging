objectForDestruction = {
  A: {
    sameKeyName: '123',
    hehe: 'hehe'
  },
  B: {
    sameKeyName: '456',
    haha: 'haha'
  }
}

const { sameKeyName: sameKeyNameInA, hehe } = objectForDestruction.A
const { sameKeyName: sameKeyNameInB, haha } = objectForDestruction.B
console.log(sameKeyNameInA, sameKeyNameInB)
// 123 456