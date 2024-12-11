interface Item {
  ItemTitle: string;
  itemAuthor?: string;
  itemReturnWindow: string;
  price: number;
}

interface Order {
  orderDate: string;
  orderNumber: string;
  totalPrice: number;
  shipTo: string;
  deliveryDate: string;
  deliveryNote?: string;
  item: Item[];
}

const orderHistory: Order[] = [
  {
    orderDate: 'Aug 4, 2020',
    orderNumber: '114-3941689-8772232',
    totalPrice: 34,
    shipTo: 'JS Masher',
    deliveryDate: 'Aug 8, 2020',
    item: [
      {
        ItemTitle: 'JavaScript for impatient programmers',
        itemAuthor: 'Rauschmayer, DR. Axel',
        itemReturnWindow: 'sep 7, 2020',
        price: 31.55,
      },
    ],
  },

  {
    orderDate: 'Jul 19,2020',
    orderNumber: '113-9984268-1280257',
    totalPrice: 44.53,
    shipTo: 'JS Masher',
    deliveryDate: 'Jul 20,2020',
    deliveryNote:
      'your item was delivered. It was handled directly to a resident',
    item: [
      {
        ItemTitle: 'The Timeless Wy of Building',
        itemAuthor: 'Alexander, Chistopher',
        itemReturnWindow: 'Return window closed on Aug 19,2020',
        price: 41.33,
      },
    ],
  },

  {
    orderDate: 'Jul 4, 2020',
    orderNumber: '114-2875557-9059409',
    totalPrice: 17.22,
    shipTo: 'JS Masher',
    deliveryDate: 'Jul 7, 2020',
    deliveryNote:
      'your item was delivered. It was handled directly to a resident',
    item: [
      {
        ItemTitle: `ItemTitle:"Gamecube controller adapter.Suoer Smash Bros Switch Gamecube Adapter for WII U,
        PC. Support Turbo and Vibration Features. No Driver and Lag-Gamecube Adapter`,
        itemReturnWindow: 'Aug 5, 2020',
        price: 15.98,
      },
    ],
  },

  {
    orderDate: 'Jul 3, 2020',
    orderNumber: '113-2883177-2648248',
    totalPrice: 138.93,
    shipTo: 'JS Masher',
    deliveryDate: 'Jul 5, 2020',
    item: [
      {
        ItemTitle:
          'GameCube Cotroller - Super Smash Bros.Edition (Nintando Switch)',
        itemReturnWindow: 'Return window closed on Aug 4, 2020',
        price: 94.95,
      },

      {
        ItemTitle: 'The Art of Sql',
        itemAuthor: 'Faroult, Stephane',
        itemReturnWindow: 'Return window closed on Aug 4, 2020',
        price: 33.99,
      },
    ],
  },
];

console.log(orderHistory[0].orderDate);
console.log(orderHistory[0].item[0].itemAuthor);
console.log(orderHistory[3].item[1].itemReturnWindow);
