const startData = {
  betType1: false,
  betType2: false,
  betType3: false,
  betType4: false,
  betType5: false,
  betType6: false,
  betType7: false,
  betType8: false,
  betType9: false
};

const WIN_COMBINATIONS = {
  data: [
    ["betType1", "betType2", "betType3"],
    ["betType4", "betType5", "betType6"],
    ["betType7", "betType8", "betType9"],
    ["betType1", "betType4", "betType7"],
    ["betType2", "betType5", "betType8"],
    ["betType3", "betType6", "betType9"],
    ["betType1", "betType5", "betType9"],
    ["betType7", "betType5", "betType3"]
  ]
};
const winResult = data => {
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

module.exports = { winResult, startData };
