import { newsData as news } from "../mooks/news";

function News() {
  return (
    <>
      <article className="bg-very-dark-blue p-4 flex flex-col h-full">
        <h2 className="text-soft-orange text-4xl font-medium mb-10">New</h2>
        <div className="flex flex-col h-full gap-y-6 lg:gap-y-0">
          {news.map((article, index, arr) => (
            <Article
              key={index}
              title={article.title}
              paragraph={article.paragraph}
              divide={index + 1 < arr.length}
            />
          ))}
        </div>
      </article>
    </>
  );
}

const Article = ({ title, paragraph, divide }) => {
  return (
    <>      
      <article className={`h-full`}>
        <h2 className="text-white font-bold hover:text-soft-orange">
          <a href="#">{title}</a>
        </h2>
        <p className="[text-wrap:pretty] text-dark-grayish-blue">{paragraph}</p>
      </article>
      {divide && <Divide />}
    </>
  );
};
const Divide = () => {
  return (<div className={`h-full flex flex-col justify-center`}>
    <div className="h-[1px] bg-slate-400/50"></div>
  </div>)
};

export default News;
