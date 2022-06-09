var input = {
  1: {
    id: 1,
    name: "John",
    children: [
      { id: 2, name: "Sally" },
      { id: 3, name: "Mark", children: [{ id: 4, name: "Harry" }] },
    ],
  },
  5: {
    id: 5,
    name: "Mike",
    children: [{ id: 6, name: "Peter" }],
  },
};
let childs = [];

function pushChild(obj) {
  if (obj.children === undefined) {
    console.log("unidentified detected", obj);
    childs.push(obj);
  } else {
    console.log("objs aree:", obj.children[0]);
    // obj.children.foreach((obj) => {
    //   pushChild(obj);
    // });
  }
}

for (const key in input) {
  pushChild(input[key]);
}

console.log(childs);
