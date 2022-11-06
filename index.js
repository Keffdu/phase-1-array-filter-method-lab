const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, string) {
    const filteredNames = drivers.filter(e => e.toLowerCase() === string.toLowerCase())
    return filteredNames
}

function fuzzyMatch(drivers, string) {
    const filteredNames = drivers.filter(e => e[0] === string[0])
    return (filteredNames)
}

function matchName(drivers, string) {
    const filteredNames = drivers.filter(e => e.name === string)
    return filteredNames
}

