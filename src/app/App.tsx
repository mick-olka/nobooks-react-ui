import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/app/Layout";
import {
  FeaturesPage,
  Home,
  NoMatch,
  RulesPage,
  StartPlayingPage,
  MapPage,
} from "@/pages";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="start" element={<StartPlayingPage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="in-progress" element={<NoMatch />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
