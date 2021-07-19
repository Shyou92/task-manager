import { Route, Switch } from 'react-router-dom';
import Plan from '../Plan/Plan';
import Processing from '../Processing/Processing';
import Releazed from '../Releazed/Releazed';
import InputForm from '../InputForm/InputForm';

function Table() {
  return (
    <section className='table'>
      <Switch>
        <Route path='/plan'>
          <Plan />
        </Route>
        <Route path='/process'>
          <Processing />
        </Route>
        <Route path='/releaze'>
          <Releazed />
        </Route>
      </Switch>
      <InputForm />
    </section>
  )
}

export default Table;