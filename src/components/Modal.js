import React, { useEffect, useRef } from "react";

export const Modal = ({ visible, setVisible, maxWidth, children }) => {
  const modal = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      // Check if click outside of div
      if (modal.current && !modal.current.contains(e.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setVisible]);

  return (
    visible && (
      <div
        className="flex overflow-auto fixed inset-0 z-50 p-10 sm:p-20 w-screen h-screen bg-black bg-opacity-40"
        id="modal"
      >
        <div
          className={`relative p-8 w-full m-auto flex-col flex bg-black ${
            maxWidth ? maxWidth : "max-w-md"
          }`}
          ref={modal}
        >
          {children}
        </div>
      </div>
    )
  );
};
