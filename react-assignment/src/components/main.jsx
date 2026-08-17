export default function MainComponent(){
  return(
    <main>
    <h2 className="paragraph"> About React </h2><br />
      <p className="paragraph">
        React is a popular JavaScript library used to build fast, interactive, and user-friendly web applications. It was developed by Meta (formerly Facebook) and helps developers create reusable components, making code easier to manage and maintain. React uses a Virtual DOM to update only the parts of a webpage that change, which improves performance. It also supports one-way data binding, making applications more predictable and easier to debug. Because of its simplicity, flexibility, and large community support, React is one of the most widely used technologies for modern front-end web development.
      </p><br></br>
      <ul className="paragraph">
        <li>Component-Based Architecture</li>
        <li>Virtual DOM</li>
        <li>Reusable Components</li>
        <li>One-Way Data Binding</li>
        <li>Cross-Platform Development</li>
        <li>Fast Rendering</li>
      </ul>
      <br />
      <button className="hero-btn">Learn More</button>
      <br />
      <img src="/src/assets/react-js.png" alt="logo" className='img'/>
    </main>
  )
}