import { useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { openNavbar, closeNavbar } from '../../redux/actionCreators';

function Processing() {
  useEffect(() => {
    store.dispatch(closeNavbar(false));
  }, []);

  return (
    <section className='processing'>
      <span>Сделаем</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Processing);
