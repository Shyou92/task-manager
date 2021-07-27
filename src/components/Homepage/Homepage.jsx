import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <section className='homepage'>
      <h2 className='homepage__greeting'>Приветствуем, Александр!</h2>
      <Link className='homepage__link' to='/plan'>
        Приступим...
      </Link>
    </section>
  );
}

export default Homepage;
