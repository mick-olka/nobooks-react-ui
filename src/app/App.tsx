import { Layout } from "@/app/Layout";
import {
	FAQPage,
	FeaturesPage,
	Home,
	MapPage,
	NoMatch,
	RulesPage,
	StartPlayingPage,
} from "@/pages";
import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

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
					<Route path="faq" element={<FAQPage />} />
					<Route path="in-progress" element={<NoMatch />} />
					<Route path="*" element={<Navigate to={"/"} />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
