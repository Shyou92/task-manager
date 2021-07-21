import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../../redux/store';
import { openNavbar, closeNavbar } from '../../redux/actionCreators';

function Navbar({ isOpened }) {
  return (
    <section className={`navbar ${isOpened ? 'navbar_is-opened' : ''}`}>
      <button
        type='button'
        className='navbar__close'
        onClick={() => store.dispatch(closeNavbar(false))}
      ></button>
      <nav className='navbar__list'>
        <Link to='/plan' className='navbar__list-item'>
          План
        </Link>
        <Link to='/process' className='navbar__list-item'>
          Выполняется
        </Link>
        <Link to='/releaze' className='navbar__list-item'>
          Сделано
        </Link>
      </nav>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpened: state.openCloseNavbar.isOpened,
  };
};

const mapDispatchToProps = {
  openNavbar,
  closeNavbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);