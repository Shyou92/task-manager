import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <section className='navbar'>
      <button type='button' className='navbar__close'></button>
      <nav className="navbar__list">
      <Link to='/plan' className='navbar__list-item'>План</Link>
      <Link to='/process' className='navbar__list-item'>Выполняется</Link>
      <Link to='/releaze' className='navbar__list-item'>Сделано</Link>
      </nav>
    </section>
  )
}

export default Navbar;