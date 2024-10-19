import { FC } from "react";
import { PageTransitionWrapper } from "@/app/Layout";

const StartPlayingPage: FC = () => {
  return (
    <PageTransitionWrapper className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12">no boobs 4 - Початок гри</h1>
      <div className="mb-8">
        <details className="cursor-pointer group">
          <summary className="text-2xl font-semibold mb-4 list-none">
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
              Грати з Java
            </span>
          </summary>
          <div className="mt-2 pl-4 overflow-hidden transition-all duration-300 max-h-0 group-open:max-h-[1000px]">
            <p>
              Айпі для джави: <br /> <u>mc.noboobies.pp.ua</u>
            </p>
            <p>Якщо айпі не працює - спробуйте айпі бедроку</p>
            <p>Проходка безплатна!</p>
            <p>
              Для того щоб розпочати Вашу гру на сервері потрібно зробити
              декілька простих кроків:
            </p>
            <p>1. Зайти на майнкрафт сервер та отримати 4-х значний код</p>
            <p>
              2. Відправте отриманий код в канал #для-бота. Який знаходиться у
              нашому{" "}
              <u>
                <a href="https://discord.com/invite/JKFY4tMhuA">дискорді</a>
              </u>
            </p>
            <p>3. Ви успішно зв'язали аккаунт і можете грати!</p>
            <p>
              При виникненні проблем/зміни ніку, звертайтесь до адміністрації.
            </p>
          </div>
        </details>
      </div>

      <div className="mb-8">
        <details className="cursor-pointer group">
          <summary className="text-2xl font-semibold mb-4 list-none">
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
              Грати з Bedrock
            </span>
          </summary>
          <div className="mt-2 pl-4 overflow-hidden transition-all duration-300 max-h-0 group-open:max-h-[1000px]">
            <p>
              Айпі для бедроку: <br />
              <u>bedrock.noboobies.pp.ua:19132</u>
            </p>
            <p>(19132 - порт серверу)</p>
            <p>Проходка безплатна!</p>
            <p>
              Для того щоб розпочати Вашу гру на сервері потрібно зробити
              декілька простих кроків:
            </p>
            <p>1. Зайти на майнкрафт сервер та отримати 4-х значний код</p>
            <p>
              2. Відправте отриманий код в канал #для-бота. Який знаходиться у
              нашому{" "}
              <u>
                <a href="https://discord.com/invite/JKFY4tMhuA">дискорді</a>
              </u>
            </p>
            <p>3. Ви успішно зв'язали аккаунт і можете грати!</p>
            <p>
              При виникненні проблем/зміни ніку, звертайтесь до адміністрації.
            </p>
          </div>
        </details>
      </div>
    </PageTransitionWrapper>
  );
};

export default StartPlayingPage;
