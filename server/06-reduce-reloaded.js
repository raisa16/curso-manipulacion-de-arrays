const items = [1, 3, 2, 3,1,10];

const rta = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] +1
    }
    return obj
},{});

console.log(rta)


const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];
const rta2 = data
.map( item => item.level)
.reduce((obj, item) => {
    if(item<5){}
    if(!obj[item]) {
        obj[item]= 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {})
console.log(rta2)

//numero de elementos repetidos en un rango
1-4, 5-8, 9-10
let numb=[1,2,3,4,1,3,4,6,7,8,10,9,9,9,2,3,5]
const rta3 = numb
.reduce((obj, item) => {
    if(item<5){
    if(!obj['1-4']) {
        obj['1-4']= 1;
    } else {
        obj['1-4'] = obj['1-4'] + 1;
    }
    }else if(item>4 && item<9){
        if(!obj['5-8']){
            obj['5-8'] = 1;
        } else {
            obj['5-8'] += 1;
         }
    } else if(item>8 && item<11){
        if(!obj['9-10']){
            obj['9-10']=1;
        }else {
            obj['9-10']+= 1;
        }
    }
    return obj;
}, {})
console.log(rta3)
