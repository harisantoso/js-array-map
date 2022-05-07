const users = [{
    name: 'Budi',
    userName: 'bdy',
    favoriteColor: 'green'
  },
  {
    name: 'Hari',
    userName: 'hry',
    favoriteColor: 'blue'
  },
];

const usersWithoutFC = users.map(function (user) {
  return {
    name: user.name,
    userName: user.userName
  }
})

console.info(usersWithoutFC)