const steps = ["one", "two", "three"];
const listTemplate = (step) => {
    return `<li>${step}</li>`;};

const stepsHtml = steps.map(listTemplate).join("");
document.querySelector("#myList").innerHTML = stepsHtml

let new_array = arr.map(function callback(currentValue, [index, [array]]) {
  return callback(currentValue, index, array);
}[thisArg]);

const grades = ["A", "B", "A"];
function gradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(gradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});

const gpa = pointsTotal / gpaPoints.length;

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

//same thing with an arrow function
const shortWords = words.filter((word) => word.length < 6);