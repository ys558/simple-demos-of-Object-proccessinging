arrTranslated = [
  { name: 'banana', display: '香蕉'  },
  { name: 'apple', display: '苹果'  },
  { name: 'pineapple', display: '菠萝'  },
]

targetArrToTranslated = [
  { transToChinese: 'apple', otherKey: 'xxx' },
  { transToChinese: 'pineapple', otherKey: 'zzz'},
  { transToChinese: 'banana', otherKey: 'yyy' },
]

const newTargetArrToTranslated = targetArrToTranslated.map( i => {
  return {
    transToChinese: (arrTranslated.find(item => item.name === i.transToChinese)).display,
    otherKey: i.otherKey
  }
})

console.log(newTargetArrToTranslated)
// [
//   { transToChinese: '苹果', otherKey: 'xxx' },
//   { transToChinese: '菠萝', otherKey: 'zzz' },
//   { transToChinese: '香蕉', otherKey: 'yyy' }
// ]