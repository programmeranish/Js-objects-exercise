numbers = [1, 2, 3, 4, 5];

function transformFn(num) {
  return num * 2;
}
function transform(numbers, transformFn) {
  let transformedNumberArray = [];
  numbers.forEach((number) => {
    transformedNumberArray.push(transformFn(number));
  });
  return transformedNumberArray;
}
console.log(transform(numbers, transformFn));
