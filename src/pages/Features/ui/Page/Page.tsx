import { FC } from "react";
import { featuresData2 } from "../../data";
import { PageTransitionWrapper } from "@/widgets";

const FeaturesPage: FC = () => {
  return (
    <PageTransitionWrapper className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12">
        no boobs Зимовий - Особливості серверу
      </h1>
      {featuresData2.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <details className="cursor-pointer group">
            <summary className="text-2xl font-semibold mb-4 list-none appearance-none">
              <span className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 transition-transform duration-300 group-open:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                {section.title}
              </span>
            </summary>
            <div
              className="mt-2 pl-4 overflow-hidden transition-all duration-300 max-h-0 group-open:max-h-[1000px]"
              dangerouslySetInnerHTML={{ __html: section.text }}
            ></div>
          </details>
        </div>
      ))}
    </PageTransitionWrapper>
  );
};

export default FeaturesPage;
