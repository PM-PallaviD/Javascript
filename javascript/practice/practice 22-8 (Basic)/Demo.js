let arr = ["Apple", "Orange", "Mango"];

// forEach
// arr.forEach((items)=>{
//     console.log(items);
// })

// for of
// for(let fruit of arr)
// {
//     console.log(fruit);
// }

// for in
// for(let items in arr)
// {
//     // console.log(items); it will give only index number
//     console.log(arr[items]);
// }

const person = {
  id: 1,
  name: "Jeevan",
  city: "Satara",
};

for (let p in person) {
  console.log(p + " : " + person[p]);
}

// Spread operator
// let arr2=[...arr,"Banana"]
// console.log(arr2);

// let arr3=["Banana"]
// arr.forEach((items)=>{
//     arr3.push(items)
// })
// console.log(arr3);

// function demo(){
//     let value=100;

//     function demo1(){
//         console.log(value);
//     }

//     demo1()
// }
// demo()

function demo() {
  let value = 100;

  function demo1() {
    console.log(value);
  }

  return demo1;
}
// demo()
let check = demo();
check();
