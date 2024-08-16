import Wrapper from "../components/Wrapper/Wrapper"


function App() {
  const o =  {Jesus: "5", Holy: "2", ThisText: "blablablablablaLOLOLO", Image: "../assets/images/buh.png", Footer: "Welcome to my foot"}
  const array=[{Jesus: "5", Holy: "2", }, {ThisText: "blablablablablaLOLOLO"}, {Image: "../assets/images/buh.png"}, {Footer: "Welcome to my foot"}]

 console.log(array);
  return (
    <>
      <Wrapper title="CatFaceBuh"><p>Buh Face</p><h2>MEME</h2></Wrapper>
    </>
  )
}

export default App
