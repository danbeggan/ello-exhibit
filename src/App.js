import { Routes, Route, Link } from "react-router-dom";

import { Header } from "components/Header";
import { Home } from "Home";

function App() {
  return (
    <div className="font-body bg-landing min-h-screen bg-cover text-white">
      <div className="absolute inset-0 bg-black/40 ">
        <Header />
        <main className="max-w-screen-lg mx-auto opacity-100 px-10">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
