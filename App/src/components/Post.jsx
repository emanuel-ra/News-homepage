import React from "react";
import { PostDesktop, PostMobile } from "../assets/images";

function Post() {
  return (
    <section className="flex flex-col">
      <picture>
        <source srcSet={PostMobile} media="(max-width: 390px)" />
        <img src={PostDesktop} alt="Web 3" />
      </picture>

      <article className="flex gap-8 py-5">
        <div>
            <h1 className={`[text-wrap:balance] font-extrabold text-4xl text-very-dark-blue `}>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="px-10 flex flex-col gap-2">
            <p className="[text-wrap:pretty] tracking-normal text-dark-grayish-blue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
            </p>
            <div>
                <button className="py-2 px-10 uppercase bg-soft-red font-semibold text-white tracking-wider hover:bg-very-dark-blue transition-colors">
                    Read more
                </button>
            </div>
        </div>      
      </article>
    </section>
  );
}

export default Post;
