// this shift selector and its attributes
export function colorAssignment(
    backgroundSelector,
    backgroundColor,
    textSelector,
    textColor
  ) {
    backgroundSelector = backgroundColor;
    textSelector = textColor;
  }
  
  // this shift the color by logic
  export function modeShiftLogic(modeName, modeColorScheme, text) {
    console.log("ran modeshift function");
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
  
  // module.exports = {
  //   modeColorScheme,
  //   modeShiftLogic,
  //   colorAssignment,
  // };
  