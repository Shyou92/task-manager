import { useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';
import { openNavbar, closeNavbar } from '../../redux/actionCreators';
import Cardboard from '../CardBoard/CardBoard';

function Plan() {
  useEffect(() => {
    store.dispatch(closeNavbar(false));
  }, []);

  return (
    <section className='plan'>
      <h3 className='plan__header'>План</h3>
      <Cardboard />
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

export default connect(mapStateToProps, mapDispatchToProps)(Plan);
