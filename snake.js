// import { modeShiftLogic, modeColorScheme } from "./utility";

// Obtain the img element, and assign it to the image variable
let image = document.querySelector("img");
image.style.height = "300px";
image.style.width = "300px";
let background = document.querySelector("body");
// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.getElementById("shrink-grow");

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function () {
  if (image.style.height === "300px" && image.style.width === "300px") {
    image.style.height = "100px";
    image.style.width = "100px";
  } else {
    image.style.height = "300px";
    image.style.width = "300px";
  }
});

function nightMode() {
  // let toggle = true;

  if (background.style.backgroundColor === "black") {
    background.style.color = "black";
    background.style.backgroundColor = "transparent";
  } else {
    background.style.color = "white";
    background.style.backgroundColor = "black";
  }
}
let changeTheme = document.getElementById("night-mode");
changeTheme.addEventListener("click", function () {
  nightMode();
});

const dropdownController = document.querySelector(".mode-select-dropdown");
dropdownController.addEventListener("change", function (event) {
  let modeName = event.target.value;
  let text = document.querySelector(".color-mode-text-id");
  modeShiftLogic(modeName, modeColorScheme, text);
});

// this shift selector and its attributes
export function colorAssignment(
  backgroundSelector,
  backgroundColor,
  textSelector,
  textColor
) {
  backgroundSelector.style.backgroundColor = backgroundColor;
  textSelector.style.color = textColor;
}

// this shift the color by logic
export function modeShiftLogic(modeName, modeColorScheme, text) {
  if (modeName === "energetic") {
    const { backgroundColor, textColor } = modeColorScheme.enegetic;
    colorAssignment(background, backgroundColor, text, textColor);
  } else if (modeName === "emotional") {
    const { backgroundColor, textColor } = modeColorScheme.emotional;
    colorAssignment(background, backgroundColor, text, textColor);
  } else {
    const { backgroundColor, textColor } = modeColorScheme.polish;
    colorAssignment(background, backgroundColor, text, textColor);
  }
}

// this is for the mode color shifting
export const modeColorScheme = {
  enegetic: {
    backgroundColor: "#FE4773",
    textColor: "#F6D68D",
  },
  emotional: {
    backgroundColor: "#003471",
    textColor: "#01E7B8",
  },
  polish: {
    backgroundColor: "#6a0dad",
    textColor: "#FFC0CB",
  },
};
