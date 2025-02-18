import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Exchange from "./components/exchange";
import Library from "./components/library";
import Assets from "./components/assets";
import Support from "./components/support";
import Developers from "./components/developers";
import Plugins from "./components/plugins";
import Knowledgebase from "./components/knowledgebase";
import Glossary from "./components/glossary";
import InstallationGuide from "./components/installation-guide";
import routes from "tempo-routes";

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <div>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/library" element={<Library />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/support" element={<Support />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/plugins" element={<Plugins />} />
            <Route path="/knowledgebase" element={<Knowledgebase />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/installation" element={<InstallationGuide />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
