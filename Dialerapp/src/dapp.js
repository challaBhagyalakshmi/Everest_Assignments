/**console.log('----Dialerapp-------');
console.log("1.create contact");
console.log("2.Search contact");

switch (choice) {
  case 1:
    create_contact();
    break;
  case 2:
    search_contact();
    break;
  default:
    console.log("enter correct choice");
}

const str = "bhagya";
console.log(str.indexOf("k"));

const s = str.search("ag");
console.log(s);

console.log(str.substring(0, 2));
*/

const arr = [1, 2, 3, 4, 5];
const str = "bhagya";
const obj = [
  { name: "bhagi", phno: 9989 },
  { name: "vaasthavi", phno: 986776 },
];
console.log(typeof arr);

console.log(typeof str);

console.log(typeof obj);
console.log(obj.length);
console.log(Object.keys(obj));
