import React, { useEffect, useRef, FunctionComponent, MutableRefObject } from "react";
import { createPortal } from "react-dom";
// the div with modal id in index.html file.
const modalRoot = document.getElementById("modal");

const Modal: FunctionComponent = ({ children }) => {

  // The useRef Hook allows you to persist values between renders.
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  // if current doesn't have a value
  if (!elRef.current) {
    // storing a newly created div to current property.
    // the div will persist after re-render
    elRef.current = document.createElement("div");
  }
  useEffect(() => {
    // if both are null
    if(!modalRoot || !elRef.current){
      return; // exit
    }
    // Appending the modal element inside modalRoot.
    modalRoot.appendChild(elRef.current);
    // clearning up the modal element from modalRoot after modal is displayed and unrendering the modal.
    return () => {
      if(elRef.current){
        modalRoot.removeChild(elRef.current);
      }
    }
  }, []);
  /**
   * The first argument of createPortal is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.
   *
   * Down at the bottom we use React's createPortal to pass the children (whatever you put inside <Modal></Modal>) to the portal div
   */
  return createPortal(
    <div className="modal-wrapper fixed h-screen w-screen flex justify-center items-center bg-gradient-to-tr from-purple-500 to-pink-500 overflow-hidden">
      {children}
    </div>,
    elRef.current
  );
};

export default Modal;
