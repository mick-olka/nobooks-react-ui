import { PageTransitionWrapper } from "@/widgets";

export const BedrockStart = () => {
  return (
    <PageTransitionWrapper className="mb-8">
      <div className="cursor-pointer group">
        <div className="text-2xl font-semibold mb-4 list-none">
          <span className="flex items-center">Грати з Bedrock</span>
        </div>
        <div className="mt-2 pl-4 overflow-hidden transition-all duration-300">
          <p>
            Айпі для бедроку: <br />
            <u>bedrock.noboobies.pp.ua:19132</u>
          </p>
          <p>(19132 - порт серверу)</p>
          <p>Проходка безплатна!</p>
          <p>
            Для того щоб розпочати Вашу гру на сервері потрібно зробити декілька
            простих кроків:
          </p>
          <p>1. Зайти на майнкрафт сервер та отримати 4-х значний код</p>
          <p>
            2. Відправте отриманий код в канал #для-бота. Який знаходиться у
            нашому{" "}
            <u>
              <a href="https://discord.com/invite/JKFY4tMhuA">Discord</a>
            </u>
          </p>
          <p>3. Ви успішно зв'язали аккаунт і можете грати!</p>
          <p>
            При виникненні проблем/зміни ніку, звертайтесь до адміністрації.
          </p>
        </div>
      </div>
    </PageTransitionWrapper>
  );
};
