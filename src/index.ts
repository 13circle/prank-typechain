interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Yee",
  gender: "male",
  age: 23,
};

const func = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(func(person));

export {};
