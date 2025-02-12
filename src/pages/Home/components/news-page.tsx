import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import news130125 from "../data/news/13-01-25.md?raw";
import news150125 from "../data/news/15-01-25.md?raw";
import news250125 from "../data/news/25-01-25.md?raw";
import news040225 from "../data/news/04-02-25.md?raw";
import news110225 from "../data/news/11-02-25.md?raw";
const newsData = [
  {
    date: new Date("02/04/2025"),
    content: news040225,
  },
  {
    date: new Date("01/15/2025"),
    content: news150125,
  },
  {
    date: new Date("01/13/2025"),
    content: news130125,
  },
  {
    date: new Date("01/25/2025"),
    content: news250125,
  },
  {
    date: new Date("02/11/2025"),
    content: news110225,
  },
];

export const NewsPane = () => {
  const sortedNews = [...newsData].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Останні оновлення</h1>
      {sortedNews.map((update) => (
        <div
          key={update.date.toISOString()}
          className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="text-gray-600 font-semibold mb-4">
            {update.date.toLocaleDateString("uk-UA", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </div>
          <div className="prose prose-slate max-w-none">
            <Markdown className="markdown" rehypePlugins={[rehypeRaw]}>
              {update.content}
            </Markdown>
          </div>
        </div>
      ))}
    </div>
  );
};
