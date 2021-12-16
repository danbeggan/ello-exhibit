import React, { useState, useEffect } from "react";

import { Header } from "components/Header";
import { Home } from "Home";

function App() {
  const [showGallery, setShowGallery] = useState(false);
  useEffect(() => {
    document.title = "ElloExhibit";
  }, []);

  return (
    <div
      className={`font-body ${
        showGallery ? "bg-white" : "bg-landing"
      } bg-center min-h-screen h-full bg-cover text-white flex`}
    >
      <div className={`w-full ${!showGallery && "bg-black/40"} flex flex-col`}>
        <Header setShowGallery={setShowGallery} />
        {!showGallery && (
          <main className="max-w-screen-lg mx-auto opacity-100 px-10">
            <Home setShowGallery={setShowGallery} />
          </main>
        )}
        {showGallery && (
          <iframe
            width="100%"
            height="100%"
            src="https://www.artsteps.com/embed/61bb253c9f6205e9dff6be37/560/315"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default App;
