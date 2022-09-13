let cars = [
  {
    brand: 'toyota',
    model: 'camry',
  },
  {
    brand: 'honda',
    model: 'civic',
  },
];

cars = new Proxy(cars, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return {};
    }
  },
});

console.log(cars[99]);
