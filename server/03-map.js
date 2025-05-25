const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
];
console.log('original', orders)
const rta = orders.map(item => item.total);
console.log('rta', rta)
//en este ejemplo aunque map es inmutable, en este caso se modifica
//la referencia en memoria
//const rta2 = orders.map(item => {
//    item.tax = 0.19;
//    return item;
//});
//console.log('rta2', rta2)
//console.log('original2', orders)

//esta es la forma correcta de aplicar map es inmutable sin modificar
//la referencia en memoria
const rta3 = orders.map(item => {
    return {
        ...item,
        tax: 0.19
    }
});
console.log('rta3', rta3)
console.log('original3', orders)