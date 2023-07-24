import { useState } from "react";
import arrowUp from "../assets/arrowUp.svg";

function Collapse(props) {
  //State du Collapse
  const [isOpen, setIsOpen] = useState(false);
  //Foncion d'ouverture / fermeture
  const toggle = (selectedElement) => {
    if (isOpen === selectedElement) {
      return setIsOpen(false);
    } else {
      setIsOpen(selectedElement);
    }
  };
  return (
    <div className="collapse">
      <div
        className="collapse__label flexHorizontal"
        onClick={() => toggle(props.label)}
      >
        <h2>{props.label}</h2>
        <img
          className={
            isOpen === props.label ? "openedCollapse" : "closedCollapse"
          }
          src={arrowUp} alt="collapse arrow"
        />
      </div>
      <div
        className={
          isOpen === props.label
            ? "collapse__text displayed"
            : "collapse__text hidden"
        }
      >
        {props.content}
      </div>
    </div>
  );
}
export default Collapse;
