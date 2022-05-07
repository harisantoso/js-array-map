const users = ['Budi', 'Anton', 'Tomi', 'Rudi'];

const mapped = users.map(function (element, index, array) {
  return element.toUpperCase()
})

console.info(users, mapped)