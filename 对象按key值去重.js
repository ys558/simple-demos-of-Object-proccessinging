// 去除有重复值的id的对象
const list = [
  {id: 1, name: 'Red'}, 
  {id: 1, name: 'Red'}, 
  {id: 1, name: 'Red'},
  {id: 2, name: 'Green'},
  {id: 3, name: 'Blue'},
  {id: 4, name: 'Lime'},
  {id: 4, name: 'Lime'},
  {id: 5, name: 'Purple'},
]

// 方法1：reduce:
const newList = list.reduce(
  (total, current) => {
    const exit = total.some( t => t.id === current.id )
    if (!exit) total.push(current)
    return total
}, [])
console.log(newList)
// [
//   { id: 1, name: 'Red' },
//   { id: 2, name: 'Green' },
//   { id: 3, name: 'Blue' },
//   { id: 4, name: 'Lime' },
//   { id: 5, name: 'Purple' }
// ]

// 方法2：
const newList2 = list.filter(
  (item, index, self) => index === self.findIndex(
    s => (s.id === item.id && s.name === item.name)
  )
)
console.log(newList2)
// [
//   { id: 1, name: 'Red' },
//   { id: 2, name: 'Green' },
//   { id: 3, name: 'Blue' },
//   { id: 4, name: 'Lime' },
//   { id: 5, name: 'Purple' }
// ]