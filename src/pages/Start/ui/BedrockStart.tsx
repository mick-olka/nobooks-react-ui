import { BEDROCK_IP } from "@/utils";
import { IpContainer, PageTransitionWrapper } from "@/widgets";

export const BedrockStart = () => {
  return (
    <PageTransitionWrapper className="mb-8">
      <div className="cursor-pointer group">
        <div className="text-2xl font-semibold mb-4 list-none">
          <span className="flex items-center">Грати з Bedrock</span>
        </div>
        <div className="mt-2 pl-4 overflow-hidden transition-all duration-300 text-lg leading-relaxed">
          <p className="w-fit">
            Айпі для бедроку: <br />
            <IpContainer ip={BEDROCK_IP} />
          </p>
          <p className="font-bold">Версія: (1.21+)</p>
          <p>Проходка безплатна!</p>
          <p>
            Для того щоб розпочати Вашу гру на сервері потрібно зробити декілька
            простих кроків:
          </p>
          <p>1. Зайти на майнкрафт сервер та отримати 4-х значний код</p>
          <p>
            {
              "2. Відправте повідомлення /linkaccount code:<код> (або через підказку бота) в канал #для-бота який знаходиться в нашому "
            }
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
