import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById("root"));

//Declarative
// const element = <h2>Inchara</h2>;
// function Inchara() {
//   return (
//     <h1>From custom tag</h1>
//   )
// }
// root.render(
//   <div>
//   <Inchara/>
//   <Inchara />
//   </div>
// );
function App(){
  return <h2>Hello</h2>
}
root.render(
  <App />
);

//Imperative
// const h1 = document.createElement("h1");
// h1.textContent = "Vanilla JS"
// document.getElementById("root").append(h1)

