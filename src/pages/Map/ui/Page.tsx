import { MAP_URL } from "@/utils";
import { PageTransitionWrapper, DefaultLoader } from "@/widgets";
import { FC, Suspense } from "react";

const Map: FC = () => {
  // const [isError, setIsError] = useState(false);
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
              // onError={() => {
              //   alert("error");
              //   setIsError(true);
              // }}
            ></iframe>
          </div>
        </PageTransitionWrapper>
      </Suspense>
    </>
  );
};

export default Map;
