import { FC, useState } from "react";
import { PageTransitionWrapper } from "@/widgets";
import { StartButton } from "./StartButton";
import { BedrockStart } from "./BedrockStart";
import { JavaStart } from "./JavaStart";

type StartPageType = null | "bedrock" | "java";

const StartPlayingPage: FC = () => {
  const [page, setPage] = useState<StartPageType>(null);

  return (
    <PageTransitionWrapper className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Початок гри</h1>
      <div
        className=" flex flex-wrap flex-col md:flex-row 
    items-center justify-center gap-4"
      >
        <StartButton onClick={() => setPage("java")} className="bg-green-400">
          <div className="flex items-center">
            <span className="text-center">JAVA</span>
            <img
              src="/images/java.svg"
              alt="Java"
              className="w-12 h-12 mb-6 ml-4"
            />
          </div>
        </StartButton>
        <StartButton
          onClick={() => setPage("bedrock")}
          className="bg-indigo-500"
        >
          <div className="flex items-center">
            <span className="text-center">BEDROCK</span>
            <img
              src="/images/phones.svg"
              alt="Phones"
              className="w-12 h-12 mb-4 ml-4"
            />
          </div>
        </StartButton>
      </div>
      <br />
      <br />
      {page === "bedrock" ? <BedrockStart /> : null}
      {page === "java" ? <JavaStart /> : null}
    </PageTransitionWrapper>
  );
};

export default StartPlayingPage;
