import { PageTransitionWrapper, DefaultLoader } from "@/widgets";
import { FC, Suspense } from "react";

const Map: FC = () => {
  return (
    <>
      <Suspense fallback={<DefaultLoader />}>
        <PageTransitionWrapper>
          <div className="hero min-h-[calc(100vh-64px)] pt-12 bg-black">
            <iframe
              height="100%"
              id="iFrameExample"
              src="https://sexy.wither.host/#world"
              title="iFrame Example"
              width="100%"
            ></iframe>
          </div>
        </PageTransitionWrapper>
      </Suspense>
    </>
  );
};

export default Map;
