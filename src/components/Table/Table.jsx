import { Route, Switch } from 'react-router-dom';
import Plan from '../Plan/Plan';
import Processing from '../Processing/Processing';
import Releazed from '../Releazed/Releazed';
import AddTaskForm from '../AddTaskForm/addTaskForm';

function Table() {
  return (
    <section className='table'>
      <button className='table__addTask'>Добавить</button>

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
      <AddTaskForm />
    </section>
  );
}

export default Table;
