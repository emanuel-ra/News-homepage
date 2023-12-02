import { newsData as news } from "../mooks/news"


function News() {
  return (
    <>
      <article className="bg-very-dark-blue p-4 flex flex-col h-full">
        <h2 className="text-soft-orange text-4xl font-medium mb-10">New</h2>
        <div className="flex flex-col h-full justify-around">
          {news.map( (article,index,arr) => (              
              <Article key={index} title={article.title} paragraph={article.paragraph} divide={(index+1<arr.length)} />   
            ) 
          )}
        </div>
      </article>
    </>
  )
}

const Article = ({title,paragraph,divide}) => {  
  return (
    <article className={`h-full ${divide && 'border-b mb-4 border-gray-300 '}`}>
        <h2 className="text-white font-bold hover:text-soft-orange">
          <a href="#">{title}</a>
        </h2>
        <p className="[text-wrap:pretty] text-dark-grayish-blue">{paragraph}</p>
    </article>
  )
}

export default News