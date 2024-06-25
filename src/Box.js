import { useState } from "react";
import { ButtonToggle } from "./ButtonToggle";

export function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <ButtonToggle onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </ButtonToggle>
      {isOpen && children}
    </div>
  );
}
