var fruits = [
  { id: 1, name: "Banana", color: "Yellow" },
  { id: 2, name: "Apple", color: "Red" },
];

function searchFruit(arr, what, value) {
  let foundArr = [];
  arr.forEach((item) => {
    if (item[what] === value) {
      foundArr.push(item);
    }
  });
  return foundArr;
}
console.log(searchFruit(fruits, "id", 1));
