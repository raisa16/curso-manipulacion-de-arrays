const numbers = [1,30,49,29,10,13]

let rta = true;

for (let index = 0; index < numbers.length; index++)
{
    if(numbers[index]>=40){
        rta= false
    }
}
console.log(rta)

let rta2 = numbers.every(number => number <= 40)
console.log(rta2)


const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];
let rta3 =team.every( member => member <=15)

console.log(rta3)