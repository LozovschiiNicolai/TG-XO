import { WIN_COMBINATIONS } from "../configs";

export const winResult = data => {
  let result = false;

  WIN_COMBINATIONS.data.map((comb, i) => {
    let equal = [];
    comb.map((item, i) => equal.push(data[item] ? data[item] : i));
    if (equal.every((val, i, arr) => val === arr[0])) {
      result = {
        res: equal[0] === "x" ? "master" : "guest",
        combination: i + 1
      };
    } else if (Object.values(data).findIndex(item => item === false) === -1) {
      result = "tie";
    }
    return equal;
  });
  return result;
};
