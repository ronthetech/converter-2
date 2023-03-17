/*
add the cylinder power to the sphere power,
change the cylinder power sign from + to –
and change the axis by 90 degrees.
*/

const rightSphereInput = document.getElementById("sphere-r");
const leftSphereInput = document.getElementById("sphere-l");
const rightCylinderInput = document.getElementById("cylinder-r");
const leftCylinderInput = document.getElementById("cylinder-l");
const rightAxisInput = document.getElementById("axis-r");
const leftAxisInput = document.getElementById("axis-l");
const rightAddInput = document.getElementById("add-r");
const leftAddInput = document.getElementById("add-l");

const form = document.getElementById("single-form");

function singleVisionResults(event) {
  event.preventDefault();
  // console.log(event);
  // console.log(sphereInput.value);
  // console.log(cylinderInput.value);
  // console.log(axisInput.value);
  // console.log(rightSphereInput.value);
  let rightSphereResult = (Number(rightSphereInput.value) + Number(rightAddInput.value));
  let leftSphereResult = (Number(leftSphereInput.value) + Number(leftAddInput.value));
  // let rightCylinderResult = -Math.abs(rightCylinderInput.value);
  // let leftCylinderResult = -Math.abs(leftCylinderInput.value);
  // let axisResult = 0;
  // if (Number(axisInput.value) <= 90) {
  //   axisResult = (Number(axisInput.value) + 90);
  // } else if (Number(axisInput.value) > 90) {
  //   axisResult = (Number(axisInput.value) - 90);
  // }
  
  console.log(rightSphereResult, leftSphereResult);
}

form.addEventListener("submit", singleVisionResults);

const intermediaForm = document.getElementById("intermedia-form");

function intermediaResults(event) {
  event.preventDefault();
  // console.log(event);
  // console.log(sphereInput.value);
  // console.log(cylinderInput.value);
  // console.log(axisInput.value);
  // console.log(rightSphereInput.value);
  let rightInterResult = (Number(rightAddInput.value)/2);
  console.log("Inter " + rightInterResult);
  let rightSphereResult = (Number(rightSphereInput.value) + rightInterResult);
  let leftInterResult = (Number(leftAddInput.value)/2);
  console.log("Inter " + leftInterResult);
  let leftSphereResult = (Number(leftSphereInput.value) + leftInterResult);
  // let rightCylinderResult = -Math.abs(rightCylinderInput.value);
  // let leftCylinderResult = -Math.abs(leftCylinderInput.value);
  // let axisResult = 0;
  // if (Number(axisInput.value) <= 90) {
  //   axisResult = (Number(axisInput.value) + 90);
  // } else if (Number(axisInput.value) > 90) {
  //   axisResult = (Number(axisInput.value) - 90);
  // }
  
  console.log(rightSphereResult, leftSphereResult);
}

intermediaForm.addEventListener("submit", intermediaResults);