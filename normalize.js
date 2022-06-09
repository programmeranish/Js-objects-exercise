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
    childs.push(obj);
  } else {
    let childrensid = []
    obj.children.forEach((obj) => {
      pushChild(obj);
      childrensid.push(obj.id)
      
    });
    obj.push(...obj,{"childrens:",childrensid})
    childs.push(obj)
  }
}

for (const key in input) {
  pushChild(input[key]);
}

console.log(childs);
