const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionScreen = document.getElementById("question-screen");
const loveScreen = document.getElementById("love-screen");

let yesSize = 18; // starting font size

// When NO is clicked
noBtn.addEventListener("click", () => {
    yesSize += 10; // increase size
    yesBtn.style.fontSize = yesSize + "px";
    yesBtn.style.padding = "20px 50px";
});

// When YES is clicked
yesBtn.addEventListener("click", () => {
    questionScreen.classList.add("hidden");
    loveScreen.classList.remove("hidden");
});