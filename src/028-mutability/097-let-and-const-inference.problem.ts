// CODE

type ButtonType = "button" | "submit" | "reset";

let type: ButtonType = "button";

// TESTS

type ButtonAttributes = {
  type: ButtonType;
};

const buttonAttributes: ButtonAttributes = {
  type,
};
