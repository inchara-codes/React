export default function NavigationBar(){
  return(
    <header className="header">
      <img src="/src/assets/R_logo(new).png" alt="" className='nav-logo'/>
      <nav>
        <ul className='nav-list'>
          <li className='nav-list-item'>Home</li>
          <li className='nav-list-item'>About</li>
          <li className='nav-list-item'>Service</li>
          <li className='nav-list-item'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}