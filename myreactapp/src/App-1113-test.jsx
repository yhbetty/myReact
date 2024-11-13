import "./App.css"
import ShowContnet from "./ShowContnet.jsx"
import ShowContnetClass from "./ShowContentClass.jsx"



function App() {
  return (
    <div className='wrap'>

      {/* 頁首圖片區 */}
      <header>
        <img src="images/banner.jpg" alt="banner" />
      </header>

      {/* 特色區 */}
      <div className='mainF'>

        <div className="MF">
          <ShowContnet />
        </div>

        <div className="slogan">
          <h3>讓學習成為一種習慣</h3>
        </div>

        {/* 推薦課程 */}
        <div className="title">
          <h2>推薦課程</h2>
        </div>

        <div id="course">
          <ShowContnetClass />
        </div>

        {/* 頁尾曲 */}
        <footer>8 陳雨萱 2024/11/13</footer>
      </div>
    </div>
  );
}

export default App