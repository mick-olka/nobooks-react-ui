import { PageTransitionWrapper, DefaultLoader, SuspenseImage } from "@/widgets";
import { FC, Suspense } from "react";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigate = useNavigate();
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
                <p className="py-1 mx-auto">
                  Український ванільний Майнкрафт сервер для Java та Bedrock
                  гравців
                </p>
                <div className="p-2 my-2 rounded-lg bg-gray-800 mx-auto">
                  &nbsp;Поточний онлайн:
                  <span
                    className="px-1 font-bold"
                    data-playercounter-ip="mc.noboobies.pp.ua"
                  >
                    0
                  </span>
                  <br />
                  <span className="pl-1 font-bold">
                    {/* mc.noboobies.pp.ua */}
                    Ведуться технічні роботи
                  </span>
                </div>
                <button
                  className="btn-primary btn max-w-48 mx-auto"
                  onClick={() => navigate("/start")}
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
