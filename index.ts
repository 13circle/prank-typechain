const name = "Yee",
  age = 23,
  gender = "male";

const func = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

func(name, age);

export {};