import { createRoot } from 'react-dom/client';
import Nav from './navbar';
import Content from './content';
import Credits from './credits';
const root = createRoot(document.getElementById("root"));

root.render(
  <>
  <Nav />
  <Content />
  <Credits />
  </>
)



