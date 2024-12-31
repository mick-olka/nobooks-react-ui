import { MAP_URL } from "@/utils";
import { PageTransitionWrapper, DefaultLoader } from "@/widgets";
import { FC, Suspense } from "react";

const Map: FC = () => {
  return (
    <>
      <Suspense fallback={<DefaultLoader />}>
        <PageTransitionWrapper>
          <div className="hero min-h-[calc(100vh-64px)] bg-black">
            <iframe
              height="100%"
              id="iFrameExample"
              src={MAP_URL}
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
