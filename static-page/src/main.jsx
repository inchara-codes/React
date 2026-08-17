import {createRoot} from 'react-dom/client';
const root = createRoot(document.getElementById("root"));

const element = <h1>Hello</h1>;
root.render(
  <div>
<Static />
</div>

);
function Static(){
  console.log(<h1>Hello</h1>);
  return (
    <main>
  <img src="/src/assets/hero.png" alt="React logo" width="60px" />
  <h1>Static React Page</h1>
  <ul>
    <li>Composable</li>
    <li>Declarative</li>
    <li>Huge eco system</li>
    <li>Interchangable</li>
  </ul>
  </main>
  )
}

