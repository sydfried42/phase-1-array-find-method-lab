// code your solution here
// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]

function superbowlWin(record) {
    for (let idv of record) {
    if (idv.result === "W") {
    return idv.year };
}};

console.log(record.find(superbowlWin));
