const element1 = document.getElementById("show_answer_1");
const element2 = document.getElementById("show_answer_2");
const element3 = document.getElementById("show_answer_3");

const answer1 = document.getElementById("answer_1");
const answer2 = document.getElementById("answer_2");
const answer3 = document.getElementById("answer_3");

const inner1 = document.getElementById("inner1");
const inner2 = document.getElementById("inner2");
const inner3 = document.getElementById("inner3");


element3.addEventListener("click", () => {
  if (answer3.style.maxHeight) {
    answer3.style.maxHeight = null;
  } else {
    answer3.style.maxHeight = inner3.scrollHeight + "px";
  }
});

element2.addEventListener("click", () => {
if (answer2.style.maxHeight) {
    answer2.style.maxHeight = null;
  } else {
    answer2.style.maxHeight = inner2.scrollHeight + "px";
  }});
element1.addEventListener("click", () => {
if (answer1.style.maxHeight) {
    answer1.style.maxHeight = null;
  } else {
    answer1.style.maxHeight = inner1.scrollHeight + "px";
  }});
