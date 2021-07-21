import { connect } from 'react-redux';
import { openNavbar, closeNavbar } from '../../redux/actionCreators';
import store from '../../redux/store';
import Avatar from '../../images/me.jpg';

function Header() {
  return (
    <section className='header'>
      <button
        className='header__logo'
        onClick={() => store.dispatch(openNavbar(true))}
      ></button>
      {/* clicking on logo will open navbar */}
      <div className='header__userInfo'>
        <span className='header__userInfo-name'>Александр</span>
        <img
          src={Avatar}
          alt='user avatar'
          className='header__userInfo-avatar'
        />
        {/* clicking on photo will open user Info popup */}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    openCloseNavbar: state.openCloseNavbar,
  };
};

const mapDispatchToProps = {
  openNavbar,
  closeNavbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
