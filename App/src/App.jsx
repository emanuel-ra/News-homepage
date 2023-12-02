import NavBar from "./components/NavBar"
import Post from "./components/Post"
import News from "./components/News"

function App() {

  return (
    <>
      <div className="max-w-[1440px] min-w-[375px] lg:w-[1440px] flex flex-wrap justify-center gap-6">
        <NavBar />
        <main className="lg:flex-1">
          <Post />
        </main>
        <aside className="lg:max-w-[350px]">
          <News />
        </aside>
      </div>     
    </>
  )
}

export default App
