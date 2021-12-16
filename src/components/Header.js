import React from "react";

export const Header = ({ setShowGallery }) => {
  return (
    <header className="w-full bg-black">
      <div className="max-w-screen-lg mx-auto text-white flex justify-center h-20 items-center opacity-100">
        <button
          className="text-3xl font-light font-dancing"
          onClick={() => setShowGallery(false)}
        >
          ElloExhibit
        </button>
      </div>
    </header>
  );
};
