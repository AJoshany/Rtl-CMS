import React, { useEffect } from "react";
import "./DetailModal.css";

export default function DetailModal({ onHide, children }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode == 27) {
        onHide();
      }
    };

    window.addEventListener("keydown", checkKey);

    return () => window.removeEventListener("keydown", checkKey);
  });

  return (
    <div className="modal-parent active">
      <div className="details-modal">{children}</div>
    </div>
  );
}
