function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [20, 10, 78, 10, 30, 48];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
