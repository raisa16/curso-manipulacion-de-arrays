const words = ['spray', 'limit', 'elite', 'exuberant']

const newArray = []
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >= 6) {
        newArray.push(item);
    }
}

const rta = words.filter( word => word.length >= 6);
console.log('original', words)
console.log('newArray', newArray)
console.log('rta', rta) 

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
const delivered = orders.filter( order => order.delivered && order.total >= 100)
console.log(delivered)
//Encontrar ordenes de compra por medio del nombre
const costumer = orders.filter( order => order.customerName == 'Valentina')
console.log(costumer)
//Encontrar ordenes de compra por medio del nombre y la llamada a una funcion
const search = (query) => {
    return orders.filter(item => { 
        return item.customerName.includes(query);
    })
}
console.log(search('San'))