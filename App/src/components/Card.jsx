function Card({image,order,title,paragraph}) {
  return (
    <article className={`flex gap-2 w-full lg:w-1/4`}>
        <img className="w-24" src={image} alt={title} />
        <div className="flex flex-col gap-2 px-2">
          <h3 className="font-bold text-3xl text-grayish-blue">{order}</h3>
          <h4 className="font-bold text-xl hover:text-soft-red"><a href="#">{title}</a></h4>
          <blockquote className="[text-wrap:pretty] tracking-normal text-dark-grayish-blue">{paragraph}</blockquote>
        </div>
    </article>
  )
}

export default Card