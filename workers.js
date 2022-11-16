onmessage = function (e) {
  console.log("here in worker");
  let result = 0;
  for (let i = 0; i < 100000000000000000; i++) {
    result += i;
  }
  postMessage(result);
};
