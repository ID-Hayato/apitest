import { DogImg } from "./components/dogImg";

export const App=()=>{
const nameStyle={
  textAlign: "center"
}
const divStyle={
  display: "flex",
  gap: "10px"
}
return(
  <>
  <h1 style={nameStyle}>🐶わんこ３連ガチャ🐶</h1>
  <div style={divStyle}>
  <DogImg />
  <DogImg />
  <DogImg />
  </div>
  </>
)

}