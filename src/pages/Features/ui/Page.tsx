import { useFeaturesList } from "@/utils";
import { PageTransitionWrapper } from "@/widgets";
import type { FC } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import beer from "../data/beer.md?raw";
import other from "../data/other.md?raw";
import regions from "../data/regions.md?raw";
import socialCredits from "../data/social-credits.md?raw";
import voicechat from "../data/voicechat.md?raw";

const featuresData: string[] = [socialCredits, regions, voicechat, beer, other];

const FeaturesPage: FC = () => {
	const features = useFeaturesList(featuresData);
	return (
		<PageTransitionWrapper className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-12">
				no boobs Зимовий - Особливості серверу
			</h1>
			{features.map((section) => (
				<div key={section.title} className="mb-8">
					<details className="cursor-pointer group">
						<summary className="text-2xl font-semibold mb-4 list-none">
							<span className="flex items-center">
								<svg
									className="w-6 h-6 mr-2 transition-transform duration-300 group-open:rotate-90"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Arrow icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
								<Markdown className="markdown">{section.title}</Markdown>
							</span>
						</summary>
						<div className="mt-2 pl-4 overflow-hidden transition-all duration-300 max-h-0 group-open:max-h-[1600px]">
							<Markdown className="markdown" rehypePlugins={[rehypeRaw]}>
								{section.content}
							</Markdown>
						</div>
					</details>
				</div>
			))}
		</PageTransitionWrapper>
	);
};

export default FeaturesPage;
