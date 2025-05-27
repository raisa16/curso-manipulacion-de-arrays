//const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
//];
// let newArray = [];
//for(let i = 0; i < matriz.length; i++){
//    for (let j= 0; j< matriz.length; j++){
//        newArray.push(matriz[i][j])
//    }
//}
//
//console.log('for',newArray)

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];
 let newArray = [];
for(let i = 0; i < matriz.length; i++){
    for (let j= 0; j< matriz.length; j++){
        newArray.push(matriz[i][j])
    }
}

//uso de flat
const rta = matriz.flat(3)
console.log('for',newArray)
console.log('flat',rta)

//como aplanar elementos de una matriz de forma
//recursiva
function profundidad(list) {
    let newList = [];
    if(typeof list != "object") return [list]
    list.forEach( element => {
        newList = newList.concat(profundidad(element))
    });
    return newList;
}
const flatRecursivo = profundidad(matriz);

console.log(flatRecursivo);