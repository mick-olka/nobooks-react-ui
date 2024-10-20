import { FC } from "react";
import { rulesData } from "../../data";
import { PageTransitionWrapper } from "@/widgets";

const RulesPage: FC = () => {
  return (
    <PageTransitionWrapper className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Правила та положення</h1>
      {rulesData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <ul className="list-inside space-y-2">
            {section.rules.map((rule, ruleIndex) => (
              <li key={ruleIndex}>{rule}</li>
            ))}
          </ul>
        </div>
      ))}
    </PageTransitionWrapper>
  );
};

export default RulesPage;
