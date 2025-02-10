import { BEDROCK_IP, JAVA_IP } from "@/utils";
import {
  DefaultLoader,
  IpContainer,
  PageTransitionWrapper,
  SuspenseImage,
} from "@/widgets";
import { type FC, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerCounter } from "../components/PlayerCounter";
import { NewsPane } from "../components/news-page";
import { DiscordIcon } from "@/widgets/icons/discord";
import { TelegramIcon } from "@/widgets/icons/telegram";

const Home: FC = () => {
  const navigate = useNavigate();
  const onStartClick = () => {
    navigate("/start");
  };
  return (
    <>
      <Suspense fallback={<DefaultLoader />}>
        <PageTransitionWrapper>
          <div className="hero min-h-[calc(100vh-264px)] bg-base-200 font-minecraft">
            <div className="hero-content flex-col lg:flex-row">
              <SuspenseImage
                src="/images/bg1.png"
                alt="noboobs"
                className="max-w-md rounded-lg shadow-2xl w-full"
              />
              <div className="flex flex-col items-center sm:items-start">
                <h1 className="text-3xl font-bold sm:text-5xl">
                  Вітаємо на&nbsp;сервері no&nbsp;boobs
                </h1>
                <p className="py-1 mx-auto">
                  Український ванільний+ Майнкрафт сервер для Java та Bedrock
                  гравців
                </p>
                <div className="p-2 my-2 rounded-lg bg-gray-800 mx-auto text-center">
                  <div className="text-center">
                    <PlayerCounter
                      ip={JAVA_IP}
                      format="Поточний онлайн: {online}"
                      refreshRate={600}
                    />
                    {/* <b>Ведуться технічні роботи - сервер скоро повернеться</b> */}
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-center">Java:</span>
                      <IpContainer ip={JAVA_IP} />
                    </div>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <span className="text-center">Bedrock:</span>
                      <IpContainer ip={BEDROCK_IP} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mx-auto mt-4 flex-wrap">
                  <button
                    type="button"
                    className="btn btn-secondary btn w-48"
                    onClick={onStartClick}
                  >
                    Почати грати
                  </button>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <a
                      className="link-hover link"
                      href="https://discord.gg/WrzV6BvEQD"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        className="btn btn-outline btn-primary btn w-48"
                      >
                        Ми в Discord
                        <DiscordIcon />
                      </button>
                    </a>
                    <a
                      className="link-hover link"
                      href="https://t.me/noboobs_ua"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        type="button"
                        className="btn btn-outline btn-accent btn w-48"
                      >
                        Ми в Telegram
                        <TelegramIcon />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NewsPane />
        </PageTransitionWrapper>
      </Suspense>
    </>
  );
};

export default Home;
