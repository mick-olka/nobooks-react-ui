import { BEDROCK_IP, JAVA_IP } from "@/utils";
import {
  PageTransitionWrapper,
  DefaultLoader,
  SuspenseImage,
  IpContainer,
} from "@/widgets";
import { FC, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerCounter } from "../components/PlayerCounter";

const Home: FC = () => {
  const navigate = useNavigate();
  const onStartClick = () => {
    navigate("/start");
  };
  return (
    <>
      <Suspense fallback={<DefaultLoader />}>
        <PageTransitionWrapper>
          <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <SuspenseImage
                src="/images/bg1.png"
                alt="noboobs"
                className="max-w-sm rounded-lg shadow-2xl w-full"
              />
              <div className="flex flex-col items-center sm:items-start">
                <h1 className="text-3xl font-bold sm:text-5xl">
                  Вітаємо на&nbsp;сервері no&nbsp;boobs
                </h1>
                {/* <p className="py-1 mx-auto">
                  Український ванільний Майнкрафт сервер для Java та Bedrock
                  гравців
                </p> */}
                <p className="py-1 mx-auto">
                  Якщо Java IP не працює, спробуйте Bedrock IP або запасний IP
                  (так, навіть на Java версії)
                </p>
                <div className="p-2 my-2 rounded-lg bg-gray-800 mx-auto text-center">
                  <div className="text-center">
                    <PlayerCounter
                      ip="mc.noboobs.world:25565"
                      format="Поточний онлайн: {online}"
                      refreshRate={600}
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-center">Java:</span>
                      <IpContainer ip={JAVA_IP} />
                    </div>
                    {/* <div className="flex items-center justify-center gap-2">
                      <span className="text-center">або:</span>
                      <IpContainer ip={"185.240.242.214:19511"} />
                    </div> */}
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-center">Bedrock:</span>
                      <IpContainer ip={BEDROCK_IP} />
                    </div>
                  </div>
                </div>
                <button
                  className="btn-primary btn max-w-48 mx-auto"
                  onClick={onStartClick}
                >
                  Почати грати
                </button>
              </div>
            </div>
          </div>
        </PageTransitionWrapper>
      </Suspense>
    </>
  );
};

export default Home;
