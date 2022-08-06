const category = {
  tehnica: 'Техника',
  odejda: 'Одежда',
  obuv: 'Обув',
  stroimat: 'Строй',
}

const cardData = [
  {
    id: 1,
    title: 'комп',
    description: 'швидкий',
    params: {
      year: 2022,
      color: 'білий',
      country: 'USA',
      category: category.tehnica
    },
    cost: 3100
  },
  {
    id: 2,
    title: 'крос',
    description: 'гарні',
    params: {
      year: 2023,
      color: 'жовтий',
      country: 'UA',
      category: category.obuv
    },
    cost: 3200
  },
  {
    id: 3,
    title: 'кофта',
    description: 'зручна',
    params: {
      year: 2024,
      color: 'зелений',
      country: 'POL',
      category: category.odejda
    },
    cost: 3300
  },
  {
    id: 4,
    title: 'плінтус',
    description: 'декоративний',
    params: {
      year: 2025,
      color: 'червоний',
      country: 'USA',
      category: category.stroimat
    },
    cost: 3400
  },
  {
    id: 5,
    title: 'ботинки',
    description: 'зручні',
    params: {
      year: 2026,
      color: 'зелений',
      country: 'UA',
      category: category.obuv
    },
    cost: 3500
  },
  {
    id: 6,
    title: 'паркет',
    description: 'твердий',
    params: {
      year: 2027,
      color: 'білий',
      country: 'USA',
      category: category.stroimat
    },
    cost: 3500
  },
  {
    id: 7,
    title: 'комп',
    description: 'швииии',
    params: {
      year: 2028,
      color: 'жовтий',
      country: 'POL',
      category: category.tehnica
    },
    cost: 3600
  },
  {
    id: 8,
    title: 'линоліум',
    description: 'гручкий',
    params: {
      year: 2029,
      color: 'чорний',
      country: 'UA',
      category: category.stroimat
    },
    cost: 5555
  },
  {
    id: 9,
    title: 'роутер',
    description: '',
    params: {
      year: 2030,
      color: 'жовтий',
      country: 'USA',
      category: category.tehnica
    },
    cost: 6666
  },
  {
    id: 10,
    title: 'машина',
    description: 'сімейна',
    params: {
      year: 2031,
      color: 'білий',
      country: 'POL',
      category: category.tehnica
    },
    cost: 7777
  },
  {
    id: 11,
    title: 'кросівки',
    description: 'адідас',
    params: {
      year: 2032,
      color: 'червоний',
      country: 'POL',
      category: category.obuv
    },
    cost: 8888
  },
  {
    id: 12,
    title: 'ніж',
    description: 'канцел',
    params: {
      year: 2033,
      color: 'зелений',
      country: 'UA',
      category: category.stroimat
    },
    cost: 9999
  },
  {
    id: 13,
    title: 'трак',
    description: 'великий',
    params: {
      year: 2034,
      color: 'чорний',
      country: 'POL',
      category: category.tehnica
    },
    cost: 1111
  },
  {
    id: 14,
    title: 'худі',
    description: 'РД',
    params: {
      year: 2035,
      color: 'білий',
      country: 'POL',
      category: category.odejda
    },
    cost: 2222
  },
  {
    id: 1,
    title: 'пилка',
    description: 'гостра',
    params: {
      year: 2036,
      color: 'жовтий',
      country: 'UA',
      category: category.stroimat
    },
    cost: 3333
  },
  {
    id: 15,
    title: 'ботинки',
    description: 'зимні',
    params: {
      year: 2037,
      color: 'зелений',
      country: 'USA',
      category: category.obuv
    },
    cost: 4444
  },
  {
    id: 16,
    title: 'кораб',
    description: 'морський',
    params: {
      year: 2038,
      color: 'червоний',
      country: 'POL',
      category: category.tehnica
    },
    cost: 5555
  },
  {
    id: 17,
    title: 'лодка',
    description: 'гумова',
    params: {
      year: 2039,
      color: 'зелений',
      country: 'POL',
      category: category.tehnica
    },
    cost: 6666
  },
  {
    id: 18,
    title: 'валик',
    description: 'для фарби',
    params: {
      year: 2040,
      color: 'чорний',
      country: 'POL',
      category: category.stroimat
    },
    cost: 7777
  },
  {
    id: 19,
    title: 'стиральна машина',
    description: '',
    params: {
      year: 2041,
      color: 'зелений',
      country: 'USA',
      category: category.tehnica
    },
    cost: 6666
  },
  {
    id: 20,
    title: 'футболка',
    description: 'легка',
    params: {
      year: 2042,
      color: 'білий',
      country: 'POL',
      category: category.odejda
    },
    cost: 5555
  },
  {
    id: 21,
    title: 'фарба',
    description: 'водні',
    params: {
      year: 2043,
      color: 'жовтий',
      country: 'UA',
      category: category.stroimat
    },
    cost: 4444
  },
  {
    id: 22,
    title: 'мікров',
    description: 'потужна',
    params: {
      year: 2044,
      color: 'червоний',
      country: 'POL',
      category: category.tehnica
    },
    cost: 3333
  },
  {
    id: 23,
    title: 'туфлі',
    description: 'лабутен',
    params: {
      year: 2045,
      color: 'зелений',
      country: 'POL',
      category: category.obuv
    },
    cost: 2222
  },
  {
    id: 24,
    title: 'гипс',
    description: 'крихкий',
    params: {
      year: 2046,
      color: 'жовтий',
      country: 'USA',
      category: category.stroimat
    },
    cost: 1111
  },
  {
    id: 25,
    title: 'холодиль',
    description: 'холодний',
    params: {
      year: 2047,
      color: 'червоний',
      country: 'POL',
      category: category.tehnica
    },
    cost: 8888
  },
]