let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  const workerObj = new Worker("./workers.js");
  workerObj.postMessage("Start worker");

  workerObj.onmessage = function (e) {
    console.log(e.data);
    document.querySelector("#output").innerHTML = e.data;
  };
});

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  document.querySelector("#hi").innerHTML += "Hi";
});
