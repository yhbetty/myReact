// 建立新的元件
function MyComponent() {

  return (
    // 空標籤: Fragment
    <>
      <h1>react</h1>
      <p>123456</p>
    </>
  )



}

function App() {

  return (

    <div>
      <MyComponent />
    </div>
  )
}

export default App
