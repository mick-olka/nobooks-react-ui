import { MAP_URL } from "@/utils";
import { DefaultLoader, PageTransitionWrapper } from "@/widgets";
import { type FC, Suspense } from "react";

const MapPage: FC = () => {
  return (
    <>
      <Suspense fallback={<DefaultLoader />}>
        <PageTransitionWrapper>
          <div className="hero min-h-[calc(100vh-64px)] bg-black">
            <iframe
              height="100%"
              id="no-boobs-map"
              src={MAP_URL}
              title="no boobs map"
              width="100%"
            />
          </div>
          {/* <Navigate to={"/in-progress"} /> */}
        </PageTransitionWrapper>
      </Suspense>
    </>
  );
};

export default MapPage;
