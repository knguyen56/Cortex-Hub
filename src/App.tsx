import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Exchange from "./components/exchange";
import Library from "./components/library";
import Assets from "./components/assets";
import Support from "./components/support";
import Plugins from "./components/plugins";
import Knowledgebase from "./components/knowledgebase";
import Glossary from "./components/glossary";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/library" element={<Library />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/support" element={<Support />} />
          <Route path="/plugins" element={<Plugins />} />
          <Route path="/knowledgebase" element={<Knowledgebase />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
