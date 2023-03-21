const rightSphereInput1 = document.getElementById("sphere-r1");
const rightSphereInput2 = document.getElementById("sphere-r2");
const rightSphereInput3 = document.getElementById("sphere-r3");
const leftSphereInput1 = document.getElementById("sphere-l1");
const leftSphereInput2 = document.getElementById("sphere-l2");
const leftSphereInput3 = document.getElementById("sphere-l3");
const rightCylinderInput1 = document.getElementById("cylinder-r1");
const rightCylinderInput2 = document.getElementById("cylinder-r2");
const rightCylinderInput3 = document.getElementById("cylinder-r3");
const leftCylinderInput1 = document.getElementById("cylinder-l1");
const leftCylinderInput2 = document.getElementById("cylinder-l2");
const leftCylinderInput3 = document.getElementById("cylinder-l3");
// const rightAxisInput = document.getElementById("axis-r");
// const leftAxisInput = document.getElementById("axis-l");
const rightAddInput1 = document.getElementById("add-r1");
const rightAddInput2 = document.getElementById("add-r2");
const rightAddInput3 = document.getElementById("add-r3");
const leftAddInput1 = document.getElementById("add-l1");
const leftAddInput2 = document.getElementById("add-l2");
const leftAddInput3 = document.getElementById("add-l3");

const formOne = document.getElementById("form-one");
const formTwo = document.getElementById("form-two");
const formThree = document.getElementById("form-three");

function resultSingle(event) {
  event.preventDefault();
  let rightSphereResult = (Number(rightSphereInput1.value) + Number(rightAddInput1.value));
  let leftSphereResult = (Number(leftSphereInput1.value) + Number(leftAddInput1.value));
  console.log(rightSphereResult, leftSphereResult);
}

formOne.addEventListener("submit", resultSingle);

function resultIntermedia(event) {
  event.preventDefault();
  let rightInterResult = (Number(rightAddInput2.value)/2);
  let rightSphereResult = (Number(rightSphereInput2.value) + rightInterResult).toPrecision(3);
  let leftInterResult = (Number(leftAddInput2.value)/2);
  let leftSphereResult = (Number(leftSphereInput2.value) + leftInterResult).toPrecision(3);
  console.log(rightInterResult,leftInterResult);
  console.log(rightSphereResult, leftSphereResult);
}

formTwo.addEventListener("submit", resultIntermedia);

function resultNear(event) {
  event.preventDefault();
  let rightInterResult = (Number(rightAddInput3.value)/2);
  let rightSphereResult = (Number(rightSphereInput3.value) + rightInterResult);
  let rightNearResult = (Number(rightSphereInput3.value) + Number(rightAddInput3.value));
  let leftInterResult = (Number(leftAddInput3.value)/2);
  let leftSphereResult = (Number(leftSphereInput3.value) + leftInterResult);
  let leftNearResult = (Number(leftSphereInput3.value) + Number(leftAddInput3.value));
  console.log(rightInterResult,leftInterResult);
  console.log(rightSphereResult,leftSphereResult);
  console.log(rightNearResult, leftNearResult);
}

formThree.addEventListener("submit", resultNear);