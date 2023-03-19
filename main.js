const rightSphereInput = document.getElementById("sphere-r");
const leftSphereInput = document.getElementById("sphere-l");
const rightCylinderInput = document.getElementById("cylinder-r");
const leftCylinderInput = document.getElementById("cylinder-l");
// const rightAxisInput = document.getElementById("axis-r");
// const leftAxisInput = document.getElementById("axis-l");
const rightAddInput = document.getElementById("add-r");
const leftAddInput = document.getElementById("add-l");

const formSingleVision = document.getElementById("form-picker__single");
const formIntermedia = document.getElementById("form-picker__intermedia");

const form = document.getElementById("form");

function results(event) {
  event.preventDefault();
  if (!formIntermedia.checked && formSingleVision.checked) {
    let rightSphereResult = (Number(rightSphereInput.value) + Number(rightAddInput.value));
    let leftSphereResult = (Number(leftSphereInput.value) + Number(leftAddInput.value));
    console.log("SingleVision");
    console.log(rightSphereResult, leftSphereResult);
  } else if (formIntermedia.checked && !formSingleVision.checked) {
    let rightInterResult = (Number(rightAddInput.value)/2);
    console.log("Inter " + rightInterResult);
    let rightSphereResult = (Number(rightSphereInput.value) + rightInterResult).toPrecision(3);
    let leftInterResult = (Number(leftAddInput.value)/2);
    console.log("Inter " + leftInterResult);
    let leftSphereResult = (Number(leftSphereInput.value) + leftInterResult).toPrecision(3);
    console.log("Intermedia");
    console.log(rightSphereResult, leftSphereResult);
  }
}

form.addEventListener("submit", results);