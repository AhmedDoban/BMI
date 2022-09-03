let btn = document.querySelector(".calculate");
let Weight = document.querySelector(".Weight");
let height = document.querySelector(".height");
let BMI_status = document.querySelector(".status");

function between(x, min, max) {
  return x >= min && x <= max;
}

btn.addEventListener("click", (ele) => {
  let nums = /[^0-9]/gi;
  if (Weight.value === "" || height.value === "") {
    ele.preventDefault();
  } else {
    if (Weight.value.match(nums) || height.value.match(nums)) {
      ele.preventDefault();
    } else {
      let resulet = Weight.value / Math.pow(height.value / 100, 2);
      document.getElementById("result").style.cssText = "display: flex;";
      document.getElementById("result").innerHTML = resulet.toFixed(1);
      if (between(resulet.toFixed(1), 0, 18.5)) {
        BMI_status.innerHTML = "underweight";
        BMI_status.style.cssText = "color:yellow";
      } else if (between(resulet.toFixed(1), 18.5, 24.9)) {
        BMI_status.innerHTML = "healthy weight ";
        BMI_status.style.cssText = "color:green";
      } else if (between(resulet.toFixed(1), 25, 29.9)) {
        BMI_status.innerHTML = "overweight";
        BMI_status.style.cssText = "color:red";
      } else if (between(resulet.toFixed(1), 30, 50)) {
        BMI_status.innerHTML = "obese";
        BMI_status.style.cssText = "color: rgb(102, 5, 5)";
      } else {
        BMI_status.innerHTML = "fake Data";
      }
    }
  }
});
