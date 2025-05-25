const letters = ['a','b','c'];

const newArray = letters.map(item => item + '++')
//const newArray = [];
//for (let index = 0; index < letters.length; index++){
//    const element = letters[index];
//    newArray.push(element + '++');
//}
console.log('original', letters);
console.log('new', newArray);

 function multiplyElements(array) {
   // Tu código aquí 👈
   let multi =array.map(element => element*2)
   return multi
   
}

console.log(multiplyElements([1,2,3,4]);)