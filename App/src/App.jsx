import NavBar from "./components/NavBar"
import Post from "./components/Post"
import News from "./components/News"
import Card from "./components/Card"
import { RetrpPCs, Laptops, Gaming } from "./assets/images"




function App() {

  return (
    <>
      <div className="max-w-[1440px] min-w-[350px] lg:w-[1440px] flex flex-wrap justify-center p-2 gap-y-6 lg:gap-6">
        <NavBar />
        <main className="lg:flex-1">
          <Post />
        </main>
        <aside className="w-full lg:max-w-[350px]">
          <News />
        </aside>

        <article className="w-full flex flex-wrap justify-between gap-4">
          <Card 
            image={RetrpPCs} 
            order={`01`} 
            title={`Reviving Retro PCs`} 
            paragraph={`What happens when old PCs are given modern upgrades?`} />
          <Card 
            image={Laptops} 
            order={`02`} 
            title={`Top 10 Laptops of 2022`} 
            paragraph={`Our best picks for various needs and budgets.`} />
          <Card 
            image={Gaming} 
            order={`03`} 
            title={`The Growth of Gaming`} 
            paragraph={`How the pandemic has sparked fresh opportunities.`} />
        </article>
      </div>     
    </>
  )
}

export default App
