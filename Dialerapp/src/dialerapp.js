var contacts = [
  {
    name: "Keanu Reeves",
    phno: "9685768789",
  },
  {
    name: "Brad Pitt",
    phno: "9687783421",
  },
  {
    name: "Trisha",
    phno: "9743274880",
  },
  {
    name: "Vijay Sethupathy",
    phno: "9949083597",
  },
];
var keypad_num = [];

function create_contact(new_contact) {
  keypad_num_generation(contacts);
  contacts.push(new_contact[0]);
  keypad_num_generation(new_contact);
  return contacts[contacts.length - 1];
}

function search_contact(input) {
  let flag = 0;
  keypad_num_generation(contacts);
  if (input.indexOf("0") > -1) {
    for (index = 0; index < contacts.length; index++) {
      const phno = contacts[index].phno;
      const first_half_phno = phno.substring(0, 5);
      const second_half_phno = phno.substring(5, 10);
      if (
        input.localeCompare(first_half_phno) == 0 ||
        input.localeCompare(second_half_phno) == 0
      ) {
        flag = 1;
        return contacts[index].name;
      } else {
        return "contact not found!";
      }
    }
  } else {
    for (index = 0; index < keypad_num.length; index++) {
      const keypad = keypad_num[index];
      const zero_located_index = keypad.indexOf("0");
      const fname = keypad.substring(0, zero_located_index);
      const lname = keypad.substring(zero_located_index + 1, keypad.length);
      if (fname.localeCompare(input) == 0 || lname.localeCompare(input) == 0) {
        flag = 1;
        return contacts[index].name;
      }
    }
    for (index = 0; index < contacts.length; index++) {
      const phnum = contacts[index].phno;
      const first_half_phno = phnum.substring(0, 5);
      const second_half_phno = phnum.substring(5, 10);
      if (
        first_half_phno.localeCompare(input) == 0 ||
        second_half_phno.localeCompare(input) == 0
      ) {
        falg = 1;
        return contacts[index].name;
      }
    }
    if (flag == 0) {
      const result = "contact not found!";
      return result;
    }
  }
}

function keypad_num_generation(contacts) {
  const alphs = [
    { alph: "a", keypad_val: 2 },
    { alph: "b", keypad_val: 2 },
    { alph: "c", keypad_val: 2 },
    { alph: "d", keypad_val: 3 },
    { alph: "e", keypad_val: 3 },
    { alph: "f", keypad_val: 3 },
    { alph: "g", keypad_val: 4 },
    { alph: "h", keypad_val: 4 },
    { alph: "i", keypad_val: 4 },
    { alph: "j", keypad_val: 5 },
    { alph: "k", keypad_val: 5 },
    { alph: "l", keypad_val: 5 },
    { alph: "m", keypad_val: 6 },
    { alph: "n", keypad_val: 6 },
    { alph: "o", keypad_val: 6 },
    { alph: "p", keypad_val: 7 },
    { alph: "q", keypad_val: 7 },
    { alph: "r", keypad_val: 7 },
    { alph: "s", keypad_val: 7 },
    { alph: "t", keypad_val: 8 },
    { alph: "u", keypad_val: 8 },
    { alph: "v", keypad_val: 8 },
    { alph: "w", keypad_val: 9 },
    { alph: "x", keypad_val: 9 },
    { alph: "y", keypad_val: 9 },
    { alph: "z", keypad_val: 9 },
  ];
  contacts.map((contact) => {
    let keypad = "";
    const name = contact.name.toLowerCase();
    const str = [...name];
    str.map((char) => {
      for (i = 0; i < alphs.length; i++) {
        if (alphs[i].alph == char) {
          keypad = keypad + alphs[i].keypad_val;
          break;
        } else if (char == " ") {
          keypad = keypad.concat("0");
          break;
        }
      }
    });
    keypad_num.push(keypad);
  });
}

module.exports = { create_contact, search_contact };
