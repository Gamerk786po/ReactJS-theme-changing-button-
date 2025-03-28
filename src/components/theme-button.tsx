import { useEffect, useState } from "react";

// Main function
function ThemeButton() {
  // Statemanagement
  const [index, SetIndex] = useState(0);
  // Effect to change the body background color
  useEffect(() => {
    if (index === 0) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
  }, [index]);
  return (
    <button
      type="button"
      className={index === 0 ? "btn btn-light" : "btn btn-dark"}
      onClick={() => {
        if (index === 0) {
          SetIndex(1);
        } else {
          SetIndex(0);
        }
      }}
    >
      {index === 0 ? "Turn Night Mode" : "Turn Light Mode"}
    </button>
  );
}
// Exporting the main function
export default ThemeButton;
