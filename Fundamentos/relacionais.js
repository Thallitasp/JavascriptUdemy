console.log('T1)', '1' == 1)
console.log('T2)', '2' === 2)
console.log('T3)', '3' != 3)
console.log('T4)', '3' !== 3)

console.log('T05)', 3 < 2)
console.log('T06)', 3 > 2)
console.log('T07)', 3 <= 2)
console.log('T08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('T09)', d1 === d2)
console.log('T10)', d1 == d2)
console.log('T11)', d1.getTime() === d2.getTime())
console.log('T12)', d1.getTime() == d2.getTime())

console.log('T13', undefined == null)
console.log('T14', undefined === null)
