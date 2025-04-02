/**
 * Downloads the current canvas content as an image file.
 */
export const downloadCanvasToImage = (): void => {
  const canvas = document.querySelector("canvas");
  if(!canvas){
    console.error("Canvas not found");
    return;
  }

  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "canvas.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Reads a file and returns its data as a base64 string.
 * @param {File} file - The file to be read.
 * @returns {Promise<string | ArrayBuffer | null>} A promise that resolves with the file's data.
 */
export const reader = (file:File): Promise<string | ArrayBuffer |null> =>
  new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

/**
 * Determines the contrasting color (black or white) for a given hex color.
 * @param {string} color - The hex color code (e.g., "#FFFFFF").
 * @returns {string} The contrasting color ("black" or "white").
 */
export const getContrastingColor = (color:String):String => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};
