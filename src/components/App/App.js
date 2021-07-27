import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import SignupSignin from '../Signup-signin/Signup-signin';
import Homepage from '../Homepage/Homepage';
import Board from '../Board/Board';

function App({ store }) {
  const [isLoading, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    setIsLoaded(true);
  }, []);

  setInterval(() => setIsLoaded(false), 3500);

  return (
    <div className='App'>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>

          <Board />
        </Switch>
        {/* {isLoading ? <Preloader /> : <SignupSignin/>} */}
      </div>
    </div>
  );
}

export default App;
