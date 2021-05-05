export const winResult = data => {
  let result = false;
  const winCombinations = [
    ["betType1", "betType2", "betType3"],
    ["betType4", "betType5", "betType6"],
    ["betType7", "betType8", "betType9"],
    ["betType1", "betType4", "betType7"],
    ["betType2", "betType5", "betType8"],
    ["betType3", "betType6", "betType9"],
    ["betType1", "betType5", "betType9"],
    ["betType7", "betType5", "betType3"]
  ];

  winCombinations.map((comb, i) => {
    let equal = [];
    comb.map((item, i) => equal.push(data[item] ? data[item] : i));
    if (equal.every((val, i, arr) => val === arr[0])) {
      result = equal[0] === "x" ? "master" : "guest";
    } else if (Object.values(data).findIndex(item => item === false) === -1) {
      result = "tie";
    }
    return equal;
  });
  return result;
};
